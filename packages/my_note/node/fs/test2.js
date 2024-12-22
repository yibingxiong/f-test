const fs = require('fs');

let watcher = fs.watch('./tmp', { encoding: 'utf-8' }, (eventType, filename) => {
    console.log(eventType)
    if (filename) {
      console.log(filename);
      // 输出: <Buffer ...>
    }
  });

  watcher.on('change',function() {
      console.log(4)
  })

  watcher.on('error', function() {
      console.log(5);
  })


  setTimeout(() => {
      watcher.close();
  }, 1000);
