// 浅拷贝
function shallowCopy(obj) {
  if (typeof obj !== 'object') return obj;

  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

// 深拷贝

function deepClone(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}


const isObject = (target) => (typeof target === "object" || typeof target === "function") && target !== null;

function deepClone(target, map = new WeakMap()) {
  if (map.get(target)) {
    return target;
  }
  // 获取当前值的构造函数：获取它的类型
  let constructor = target.constructor;
  // 检测当前对象target是否与正则、日期格式对象匹配
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    // 创建一个新的特殊对象(正则类/日期类)的实例
    return new constructor(target);
  }
  if (isObject(target)) {
    map.set(target, true);  // 为循环引用的对象做标记
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop], map);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}


////////////// 第二次写

function shallowCopy2(obj) {
  return Object.assign({}, obj);
}

function deepCopy2(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }
  const newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === deepCopy2(obj[key]);
    }
  }
  return newObj;
}


const a = {
  b: {
    c: 1
  },
  d: [
    {
      e: 3
    }
  ],
}


const sa = shallowCopy2(a);

const da = deepCopy2(a);

console.log('a===原始', JSON.stringify(a))
console.log('sa====', JSON.stringify(sa))
console.log('da====', JSON.stringify(da))

console.log(sa.b === a.b)
console.log(da.b === a.b)
console.log(sa.d === a.d)
console.log(da.d === a.d)

