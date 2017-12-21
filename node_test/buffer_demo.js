// console.log(Buffer);

// console.log('alloc(10)==', Buffer.alloc(10));
// console.log('alloc(10, 1)==', Buffer.alloc(10, 1));
// console.log('allocUnsafe(10)==', Buffer.allocUnsafe(10)); // 没有初始化数据，不安全
// console.log('allocUnsafeSlow(10)==', Buffer.allocUnsafeSlow(10)); // 没有初始化数据，不安全
// console.log('[1, 34, 121]==', Buffer.from([1, 34, 121]));
// console.log('abst==', Buffer.from('abst'));
// console.log('ab2t latin1==', Buffer.from('ab2t', 'latin1'));
// console.log('hello world ascii===', Buffer.from('hello world', 'ascii'));
// console.log('ab梦想ab23 utf8===', Buffer.from('ab梦想ab23', 'utf8'));

/* 输出：
  alloc(10)== <Buffer 00 00 00 00 00 00 00 00 00 00>
  alloc(10, 1)== <Buffer 01 01 01 01 01 01 01 01 01 01>
  allocUnsafe(10)== <Buffer 00 00 00 00 00 00 00 00 00 00>
  allocUnsafeSlow(10)== <Buffer 18 c0 41 ac 20 02 00 00 c0 24>
  [1, 34, 121]== <Buffer 01 22 79>
  abst== <Buffer 61 62 73 74>
  ab2t latin1== <Buffer 61 62 32 74>
  hello world ascii=== <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
  ab梦想ab23 utf8=== <Buffer 61 62 e6 a2 a6 e6 83 b3 61 62 32 33>
*/

// ====================
// const buf = Buffer.from('ab梦想a');
// console.log('ab梦想a==', buf);
// console.log(String.fromCharCode.apply(null, new Uint16Array(buf)));
// console.log('ab梦想a'.charCodeAt(2));

/* 输出：
  ab梦想a== <Buffer 61 62 e6 a2 a6 e6 83 b3 61>
  abæ¢¦æ³a
  26790
*/

// ===================
// console.log(Buffer.from(new Uint32Array([1, 2, 3, 4])));
// console.log(Buffer.from(new Uint32Array([1, 2, 3, 4]).buffer));
// console.log(new Uint32Array(Buffer.from([1, 2, 3, 4])));
// console.log(Buffer.from([1, 2, 3, 4]).buffer);
// console.log(new Uint32Array(Buffer.from([1, 2, 3, 4]).buffer));

/* 输出：
  <Buffer 01 02 03 04>
  <Buffer 01 00 00 00 02 00 00 00 03 00 00 00 04 00 00 00>
  Uint32Array [ 1, 2, 3, 4 ]
  ArrayBuffer { byteLength: 8192 }
*/

// ====================
// const buf = Buffer.from([1, 2, 3, 4]);

// for (const value of buf) {
//   console.log(value);
// }

/* 输出：
  1  2  3  4
 */

// ================
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
// const arr = new Uint16Array(2);

// arr[0] = 5000;
// arr[1] = 4000;

// console.log(arr.buffer); // ArrayBuffer { byteLength: 4 }

// // 拷贝 `arr` 的内容
// const buf1 = Buffer.from(arr);

// console.log(buf1.buffer); // 输出: ArrayBuffer { byteLength: 8192 }
// console.log(buf1.length); // 输出: 2
// console.log(buf1.byteLength); // 输出: 2

// // 与 `arr` 共享内存
// const buf2 = Buffer.from(arr.buffer);

// console.log(buf2.buffer); // 输出: ArrayBuffer { byteLength: 4 }
// console.log(buf2.length); // 输出: 4

// // 输出: <Buffer 88 a0>
// console.log(buf1);

// // 输出: <Buffer 88 13 a0 0f>
// console.log(buf2);

// arr[1] = 6000; // 修改 arr（保持原值）

// // 输出: <Buffer 88 a0>
// console.log(buf1);

// // 输出: <Buffer 88 13 70 17>（原值被修改）
// console.log(buf2);

// const arr1 = new Uint16Array(buf1);

// const arr2 = new Uint16Array(buf1.buffer);

// // 输出: Uint16Array [ 136, 160 ]
// console.log(arr1);

// // 输出：Uint16Array [41096, 17302, 505, 0, 59392, 16894, 505 ...]
// console.log(arr2);

// buf1[0] = 10; // 修改 buf1

// // 输出: <Buffer 0a a0>
// console.log(buf1);

// // 输出: Uint16Array [ 136, 160 ]（保持原值）
// console.log(arr1);

// // 输出：Uint16Array [40970, 17302, 505, 0, 59392, 16894, 505 ...]（原值被修改）
// console.log(arr2);

// ================== 报错
// class Foo {
//   [Symbol.toPrimitive]() {
//     return 'this is a test';
//   }
// }

// console.log(Buffer.from(new Foo(), 'utf8'));

// ==================
// const buffer = new ArrayBuffer(24);

// const idView = new Uint32Array(buffer, 0, 1);
// const usernameView = new Uint8Array(buffer, 4, 16);

// console.log(idView.buffer === usernameView.buffer); // true

// ===================
// const buf = Buffer.from('buf');

// for (const pair of buf.keys()) {
//   console.log(pair);
// }
// /* 输出：
//   0
//   1
//   2
// */

// for (const pair of buf.values()) {
//   console.log(pair);
// }
//  输出：
//   98
//   117
//   102


// console.log(buf.entries()); // {}
// for (const pair of buf.entries()) {
//   console.log(Array.isArray(pair)); // true
//   console.log(pair);
// }
// /* 输出：
//   [ 0, 98 ]
//   [ 1, 117 ]
//   [ 2, 102 ]
// */

// ================
// const buf1 = Buffer.from('ABC');
// const buf2 = Buffer.from('414243', 'hex');
// const buf3 = Buffer.from('ABCD');

// // 输出: true
// console.log(buf1.equals(buf2));

// // 输出: false
// console.log(buf1.equals(buf3));

// ===============
// console.log(Buffer.allocUnsafe(3).fill('\u0222'));

// const buf = Buffer.allocUnsafe(5);

// console.log(buf);

// const back = buf.fill('a');

// console.log(buf);
// console.log(back);

/* 输出：
  <Buffer c8 a2 c8>
  <Buffer 80 6e 1c 00 00>
  <Buffer 61 61 61 61 61>
  <Buffer 61 61 61 61 61>
*/

// ===============
// const buf = Buffer.alloc(10);
// console.log(buf); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// const buf1 = buf.slice(2, 4);
// console.log(buf1); // <Buffer 00 00>

// buf1[0] = 12;

// console.log(buf); // <Buffer 00 00 0c 00 00 00 00 00 00 00>
// console.log(buf1); // <Buffer 0c 00>（都被修改了说明是共享内存）

// ===============
// const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
// console.log(buf1); // <Buffer 01 02 03 04 05 06 07 08>

// buf1.swap16();
// console.log(buf1); // <Buffer 02 01 04 03 06 05 08 07>
// buf1.swap16();

// buf1.swap32();
// console.log(buf1); // <Buffer 04 03 02 01 08 07 06 05>
// buf1.swap32();

// buf1.swap64();
// console.log(buf1); // <Buffer 08 07 06 05 04 03 02 01>
// buf1.swap64();

// const buf2 = Buffer.from([0x1, 0x2, 0x3]);
// buf2.swap16(); // RangeError: Buffer size must be a multiple of 16-bits

// ====================
// // const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const buf = Buffer.from('abcde');

// const json = JSON.stringify(buf);
// const json1 = buf.toJSON();

// console.log(json); // {"type":"Buffer","data":[1,2,3,4,5]} / {"type":"Buffer","data":[97,98,99,100,101]}
// console.log(json1); // { type: 'Buffer', data: [ 1, 2, 3, 4, 5 ] } / { type: 'Buffer', data: [ 97, 98, 99, 100, 101 ] }

// console.log(JSON.parse(json));// { type: 'Buffer', data: [ 1, 2, 3, 4, 5 ] } / { type: 'Buffer', data: [ 97, 98, 99, 100, 101 ] }

// console.log(Buffer.from(JSON.parse(json).data)); // <Buffer 01 02 03 04 05> / <Buffer 61 62 63 64 65>

// ====================
// const buffer = require('buffer');
// console.log(buffer.INSPECT_MAX_BYTES); // 输出：50
// console.log(buffer.kMaxLength); // 输出：2147483647
// console.log(buffer.kStringMaxLength); // 268435440
// console.log(buffer);
/* 输出：
{ Buffer:
   { [Function: Buffer]
     poolSize: 8192,
     from: [Function],
     alloc: [Function],
     allocUnsafe: [Function],
     allocUnsafeSlow: [Function],
     isBuffer: [Function: isBuffer],
     compare: [Function: compare],
     isEncoding: [Function],
     concat: [Function],
     byteLength: [Function: byteLength],
     [Symbol(node.isEncoding)]: [Function] },
  SlowBuffer: [Function: SlowBuffer],
  INSPECT_MAX_BYTES: 50,
  kMaxLength: 2147483647,
  constants: { MAX_LENGTH: 2147483647, MAX_STRING_LENGTH: 268435440 },
  kStringMaxLength: 268435440,
  transcode: [Function: transcode] }
*/
// console.log(buffer.constants); // 输出：{ MAX_LENGTH: 2147483647, MAX_STRING_LENGTH: 268435440 }

// const newBuf = buffer.transcode(Buffer.from('€'), 'utf8', 'ascii');
// console.log(newBuf.toString('ascii'));
// // 输出：?  因为欧元符号（€）不能在 US-ASCII 中表示，所以在转换 Buffer 的时候使用 ? 代替。

// ================
// const buf = Buffer.allocUnsafe(8);

// buf.writeInt32BE(0x01020304, 0);

// // 输出: <Buffer 01 02 03 04 20 02 00 00>
// console.log(buf);

// buf.writeInt32LE(0x05060708, 4);

// // 输出: <Buffer 01 02 03 04 08 07 06 05>
// console.log(buf);

const buf = Buffer.allocUnsafe(7);

buf.writeIntBE(0x1234567890ab, 0, 5);

// 输出: <Buffer 12 34 56 78 90 ab>
console.log(buf);

buf.writeIntLE(0x1234567890ab, 0, 5);

// 输出: <Buffer ab 90 78 56 34 12>
console.log(buf);





























// // 当前页面
// const obj = { a: 'as', b: { c: 'asd'} };

// window.sessionStorage.setItem('obj', JSON.stringify(obj));

// // 另一页面
// const obj1 = JSON.parse(window.sessionStorage.getItem('obj'));

// console.log(obj1);