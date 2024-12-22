let fs = require('fs');
let zlib = require('zlib');

function benchStream(inSize, outSize) {
  let time = process.hrtime();
  let watermark = process.memoryUsage().rss;
  let input = fs.createReadStream(__dirname+ '/json-lines.txt', {
    bufferSize: inSize
  });

  let gzip = zlib.createGzip({chunkSize: outSize});

  let output = fs.createWriteStream(__dirname+'/out.gz', {bufferSize: inSize});

  let memoryCheck = setInterval(() => {
    let rss = process.memoryUsage().rss;

    if(rss > watermark) {
      watermark = rss;
    }
  }, 50);

  input.on('end', () => {
    let memoryEnd = process.memoryUsage();
    clearInterval(memoryCheck);

    let diff = process.hrtime(time);
    console.log([
      inSize,
      outSize,
      (diff[0] * 1e9 +diff[1])/ 1000000,
      watermark/1024
    ].join(','))
  })
  input.pipe(gzip).pipe(output);
  return input;
}
console.log('file size, gzip size, ms, Rss');
let fileSize = 128;
let zipSize = 5025;


function run(times) {
  benchStream(fileSize, zipSize)
  .on('end', () => {
    times--;
    fileSize*=2;
    zipSize*=2;
    if(times>0) {
      run(times)
    }
  })
}

run(10)