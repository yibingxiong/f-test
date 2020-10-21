const fs = require('fs');
process.env.NODE_DEBUG = true;
console.log(process.cwd())
fs.unlink('./tmp/hello', (err) => {
  if (err) throw err;
  console.log('成功删除 /tmp/hello');
});