import 'core-js'

// const p = new Promise();
// [1, 2].includes(1);
// 'foobar'.includes('foo');

const asyncFun = async () => {
  await new Promise(setTimeout, 2e3);

  return '2s之后才返回该字符串';
};
export default asyncFun;