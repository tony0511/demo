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

// // // 拷贝 `arr` 的内容
// const buf1 = Buffer.from(arr);

// // 输出: ArrayBuffer { byteLength: 8192 }
// console.log(buf1.buffer);

// // 与 `arr` 共享内存
// const buf2 = Buffer.from(arr.buffer);

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

