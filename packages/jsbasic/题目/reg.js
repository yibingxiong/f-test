// 1、var s1 = "get-element-by-id"; 给定这样一个连字符串，写一个function转换为驼峰命名法形式的字符串 getElementById
function to(str) {
  const reg = /\-\w/g;
  return str.replace(reg, (x) => {
    return x.substr(1).toUpperCase();
  });
}

const a = to('get-element-by-id')
console.log(a);
function to2(str) {
  const res = str.replace(/[A-Z]/g, (x) => {
    return '-' + x.toLowerCase();
  })
  return res;
}
const b = to2('GetElementById');

console.log(b);

console.log('------------------------1')

// 2、判断字符串是否包含数字

function hasNum(str) {
  return /\d/.test(str);
}

console.log(hasNum('aaa1232fff'))
console.log(hasNum('ffff'))
console.log('------------------------2')

// 3、判断电话号码

console.log('------------------------3')

function isPhone(str) {
  return /^1\d{10}$/.test(str);
}

console.log(isPhone('12324'));
console.log(isPhone('13777777777'));

// 4、判断是否符合指定格式

console.log('------------------------4')
// 给定字符串str，检查其是否符合如下格式

// XXX-XXX-XXXX
// 其中X为Number类型

function isPartern(str) {
  return /^\d{3}(-\d{3}){2}$/.test(str)
}

console.log(isPartern('111-222'))

// 5、判断是否符合USD格式
// 给定字符串 str，检查其是否符合美元书写格式

// 以 $ 开始
// 整数部分，从个位起，满 3 个数字用 , 分隔
// 如果为小数，则小数部分长度为 2
// 正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3**

console.log('------------------------5')

function isUSD(str) {
  const reg = /^\$\d{1,3}?(,\d{3})*(\.\d{2})?$/;
  return reg.test(str);
}

console.log(isUSD('$102,303,2.03'))
console.log(isUSD('$2.03'))
console.log(isUSD('$3,432,12.12'))
console.log(isUSD('$34,344.3'))

// 6、JS实现千位分隔符
console.log('------------------------6')
function numSplit(num) {
  const reg = /\d{1,3}?(?=(\d{3})+$)/g;
  return String(num).replace(reg, '$&,')
}
console.log(numSplit(1))
console.log(numSplit(12))
console.log(numSplit(123))
console.log(numSplit(1234))
console.log(numSplit(12345))
console.log(numSplit(123456))
console.log(numSplit(1234567))
// 7、获取 url 参数
console.log('------------------------7')
/**
 * [通过参数名获取url中的参数值]
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param  {[string]} queryName [参数名]
 * @return {[string]}           [参数值]
 */
function getQueryValue1(url, queryName) {
  const reg = new RegExp("([\?&])" + queryName + "=([^&#]*)(&|$|#)", "i");
  const r = url.match(reg);
  if (r != null) {
    return decodeURI(r[2]);
  } else {
    return null;
  }
}
const url1 = 'https://www.baidu.com/s?wd=%E5%A5%BD%E5%95%8A&wd=ttt&dd=&cc=ttt'
console.log(getQueryValue1(url1, 'wd'))

function getQueryValue2(url, key) {
  const reg = /([\?&])([^#&=]+)=([^=#&]*)/g;
  const obj = {};
  url.replace(reg, (_, _a, key, value) => {
    if (!obj[key]) {
      obj[key] = decodeURI(value);
    } else {
      obj[key] = [].concat(obj[key], decodeURI(value));
    }
  })
  if (typeof key === 'undefined') return obj;
  return obj[key] || '';
}

console.log(getQueryValue2(url1, 'wd'))