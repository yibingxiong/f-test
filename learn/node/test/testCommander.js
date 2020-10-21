/**
 * commander 使用
 * option() boolean
 * -template-engine =》 templateEngine
 * --no-sauce -> 否定
 * 
 * ---------------
 * 
 * version 程序版本号 -V
 * .version('0.0.1', '-v, --version')
 * 
 * -------------
 * command 一个命令，做一些操作
 * 
 * 
 */
var program = require('commander');
 
program
  .version('0.0.1', '-v, --version')
  .option('-p, --peppers', 'Add peppers')
  .option('-n, --no-na', 'fouding')
  .option('-t, --hello-world','hello')
  .parse(process.argv);
 
console.log(program.peppers);
console.log(program.na);
console.log(program.helloWorld);

// var program = require('commander');
 
// program
//   .command('rm <dir>')
//   .option('-r, --recursive', 'Remove recursively')
//   .action(function (dir, cmd) {
//     console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
//   })
 
// program.parse(process.argv)