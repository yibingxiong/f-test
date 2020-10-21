var str = "hello world";
// 替换字符串
var s1 = str.replace("hello","a");
console.log(s1);// a world
// 使用正则替换字符串
var s2 = str.replace(/hello/,"b");
console.log(s2); // b world

// 使用正则全局替换 字符串
var s3 = str.replace(/l/g,'');
console.log(s3); // heo word

// $1,$2 代表的是第一个和第二个子表达式相匹配的文本
// 子表达式需要使用小括号括起来,代表的含义是分组
var name = "longen,yunxi";
var s4 = name.replace(/(\w+)\s*,\s*(\w+)/,"$2 $1");
console.log(s4); // "yunxi,longen"

// $& 是与RegExp相匹配的子字符串
var name = "hello I am a chinese people";
var regexp = /am/g;
if(regexp.test(name)) {
    //返回正则表达式匹配项的字符串
    console.log(RegExp['$&']);  // am

    //返回被搜索的字符串中从最后一个匹配位置开始到字符串结尾之间的字符。
    console.log(RegExp["$'"]); // a chinese people

    //返回被查找的字符串从字符串开始的位置到最后匹配之前的位置之间的字符。
    console.log(RegExp['$`']);  // hello I 
    
    // 返回任何正则表达式查找过程中最后括号的子匹配。
    console.log(RegExp['$+']); // 空字符串

    //返回任何正则表达式搜索过程中的最后匹配的字符。
    console.log(RegExp['$_']);  // hello I am a chinese people
}

// replace 第二个参数也可以是一个function 函数
var name2 = "123sdasadsr44565dffghg987gff33234";
name2.replace(/\d+/g,function(v){
    console.log(v); 
    /*
     * 第一次打印123
     * 第二次打印44565
     * 第三次打印987
     * 第四次打印 33234
     */
});
/*
 * 如下函数，回调函数参数一共有四个
 * 第一个参数的含义是 匹配的字符串
 * 第二个参数的含义是 正则表达式分组内容，没有分组的话，就没有该参数,
 * 如果没有该参数的话那么第四个参数就是undefined
 * 第三个参数的含义是 匹配项在字符串中的索引index
 * 第四个参数的含义是 原字符串
 */
 name2.replace(/(\d+)/g,function(a,b,c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    /*
     * 如上会执行四次，值分别如下(正则使用小括号，代表分组)：
     * 第一次： 123,123,0,123sdasadsr44565dffghg987gff33234
     * 第二次： 44565,44565,11,123sdasadsr44565dffghg987gff33234
     * 第三次： 987,987,22,123sdasadsr44565dffghg987gff33234
     * 第四次： 33234,33234,28,123sdasadsr44565dffghg987gff33234
     */
 });