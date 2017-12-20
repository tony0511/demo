
// console.log(new ArrayBuffer(32));

// const buf = new ArrayBuffer(16);
// const typeArray = new Int8Array(buf);
// const dataView = new DataView(buf);

// console.log(typeArray);
// console.log(dataView);
// console.log(dataView.getUint8(0));

// ================
// const str = '\u00bd + \u00bc = \u00be';
// console.log(`${str}: ${str.length} 个字符, ` + `${Buffer.byteLength(str, 'utf8')} 个字节`);

// // 输出: ½ + ¼ = ¾: 9 个字符, 12 个字节

// ================
// const buf1 = Buffer.from('1234');
// const buf2 = Buffer.from('0123');
// const arr = [buf1, buf2];

// // 输出: [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
// // (结果相当于: [buf2, buf1])
// console.log(arr.sort(Buffer.compare));

// ================
// const buf1 = Buffer.alloc(2);
// const buf2 = Buffer.alloc(4);
// const buf3 = Buffer.alloc(3);
// const totalLength = buf1.length + buf2.length + buf3.length;

// // 输出: 9
// console.log(totalLength);

// const bufA = Buffer.concat([buf1, buf2, buf3], 3);

// // 输出: <Buffer 00 00 00>
// console.log(bufA);

// // 输出: 3
// console.log(bufA.length);

// ================
const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// 拷贝 `arr` 的内容
const buf1 = Buffer.from(arr);

// 与 `arr` 共享内存
const buf2 = Buffer.from(arr.buffer);

// 输出: <Buffer 88 a0>
console.log(buf1);

// 输出: <Buffer 88 13 a0 0f>
console.log(buf2);

arr[1] = 6000;

// 输出: <Buffer 88 a0>
console.log(buf1);

// 输出: <Buffer 88 13 70 17>
console.log(buf2);

// 输出: <Buffer 88 a0>
const arr1 = new Uint16Array(buf1);

// const arr2 = new Uint16Array(buf1.buffer);

buf1[0] = 10;

// 输出: <Buffer 0a a0>
console.log(buf1);

// 输出: [ 136, 160 ]
console.log(arr1);

// console.log(arr2);

