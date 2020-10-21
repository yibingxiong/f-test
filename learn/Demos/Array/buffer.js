// ArrayBuffer缓冲区创建
let buffer = new ArrayBuffer(10);

// 缓冲区大小
console.log(buffer.byteLength);

// 缓冲区的截取, 不含最后一个
let buf1 = buffer.slice(1,2);       //  创建了一个新的ArrayBuffer实例
console.log(buf1 === buffer);       // false
console.log(buf1.byteLength);       // 1

// 数据视图的创建
let view = new DataView(buffer);    // (ArrayBuffer buffer, Number offset, Number count)

console.log(view.buffer === buffer);    // true
console.log(view.byteLength);   // 10
console.log(view.byteOffset);   // 0
/*********************数据类型***********************/
// int8 有符号8位整型
// uint8 无符号8位整型
// int16 有符号16位整型
// uint16无符号16位型
// int32有符号32位整型
// uint32无符号32位整型
// float32 32位浮点数
// float64 64位浮点数

/////////////////////////////////////

console.log('-------------------------------')
view.setInt8(0, 3, false);
view.setInt16(1, -2);

console.log(view.getInt8(0, true));

console.log(view.getInt16(1))


// 定型数组视图
let buf2 = new ArrayBuffer(10);
let int8view = new Int8Array(buf2);
let int16view = new Int16Array(buf2);

console.log(int16view.length);
console.log(int8view.length);
// 
console.log('----------------');

let ints1 = new Int16Array([1,2]);
let ints2 = new Int32Array(ints1);

console.log(ints1.buffer === ints2.buffer)
console.log(ints1.byteLength);
console.log(ints1.length);


console.log(ints2.byteLength);
console.log(ints2.length);


console.log(Uint16Array.BYTES_PER_ELEMENT)