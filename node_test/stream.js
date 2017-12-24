const fs = require('fs');

console.log(require('stream'));

// // 写入 'hello, ' ，并用 'world!' 来结束写入
// const file = fs.createWriteStream('example.txt');

// // file.write('hello, ');

// // file.end('world!'); // 后面不允许再写入数据，否则会报错

// // file.write('asas'); // 在调用了 stream.end() 方法之后，再调用 stream.write() 方法将会导致错误。

// file.cork();
// file.write('some ');
// file.cork();
// file.write('data ');
// process.nextTick(() => {
//   // file.uncork();
//   // 之前的数据只有在 uncork() 被二次调用后才会输出
//   // file.uncork();
// });

// file.end();

// file.destroy(new Error('流被摧毁了！'));

// // 在流或其底层资源（比如一个文件）关闭后触发。'close' 事件触发后，该流将不会再触发任何事件。
// file.on('close', (data) => {
//   console.log('close==', data);
// });

// // 调用 stream.write(chunk) 方法返回 false 后将在适当的时机触发，这时才可以继续向流中写入数据。
// file.on('drain', (data) => {
//   console.log('drain==', data);
// });

// // 在写入数据出错或者使用管道出错时触发。事件发生时，回调函数仅会接收到一个 Error 参数。注意: 'error' 事件发生时，流并不会关闭。
// file.on('error', (data) => {
//   console.log('error==', data);
// });

// // 在调用了 stream.end() 方法，且缓冲区数据都已经传给底层系统（underlying system）之后触发。
// file.on('finish', (data) => {
//   console.log('finish==', data);
// });

// // 在可读流（readable stream）上调用 stream.pipe() 方法，并在目标流向 (destinations) 中添加当前可写流 ( writable ) 时触发。
// file.on('pipe', (data) => {
//   console.log('pipe==', data);
// });

// // 在 Readable 上调用 stream.unpipe() 方法，从目标流向中移除当前 Writable 时触发。
// file.on('unpipe', (data) => {
//   console.log('unpipe==', data);
// });

/* 输出：
finish== undefined
close== undefined
error== Error: 流被摧毁了！
    at Object.<anonymous> (d:\items\demo\node_test\stream.js:50:14)
    at Module._compile (module.js:635:30)
    at Object.Module._extensions..js (module.js:646:10)
    at Module.load (module.js:554:32)
    at tryModuleLoad (module.js:497:12)
    at Function.Module._load (module.js:489:3)
    at Function.Module.runMain (module.js:676:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
*/

// ===========================
// 打开一个流:
const readStream = fs.createReadStream('abc.txt', 'utf-8');
const writeStream = fs.createWriteStream('example.txt');

readStream.setEncoding('utf8');

// readStream.on('data', function (chunk) {
//     console.log(chunk); // fiykhgasytgawewe
// });

// readStream.on('end', function () {
//     console.log('END'); // END
// });

// readStream.on('error', function (err) {
//     console.log('ERROR: ' + err);
// });

// console.log('程序执行完毕！');

/* 输出：（异步操作）
  程序执行完毕！
  fiykhgasytgawewe
  END
*/

// const { PassThrough, Writable } = require('stream');
// const pass = new PassThrough();
// const writable = new Writable();

// readStream.pipe(writeStream);
// readStream.unpipe(writeStream);
// flowing 现在为 false

readStream.on('data', (chunk) => { console.log('data==', chunk.toString()); });

readStream.on('end', (data) => { console.log('end==', data); });

readStream.on('error', (data) => { console.log('error==', data); });

readStream.on('readable', (data) => { console.log('readable==', data); });

writeStream.write('ok'); // 不会触发 'data' 事件
// readStream.resume(); // 只有被调用了才会触发 'data' 事件

/* 输出：
  data== fiykhgasytgawewe
  readable== undefined
  end== undefined
*/