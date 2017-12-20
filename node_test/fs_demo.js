// const fs = require('fs');

// fs.readFile('abc.txt', function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(data); // 是一个 Buffer <Buffer 7b 20 63 ...
//   // console.log("异步读取: " + data.toString());
// });

// fs.stat('有道云协作.lnk', function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("读取文件信息成功！");
//    console.log('stats==', stats);
   
//    // 检测文件类型
//    console.log("isFile== " + stats.isFile());
//    console.log("isDirectory== " + stats.isDirectory());
//    console.log("isBlockDevice== " + stats.isBlockDevice());
//    console.log("isCharacterDevice== " + stats.isCharacterDevice());  
//    console.log("isSymbolicLink== " + stats.isSymbolicLink());
//    console.log("isFIFO== " + stats.isFIFO());  
//    console.log("isSocket== " + stats.isSocket());  
// });


// const getFileInfo = () => {
//   fs.stat('abc.txt', function (err, stats) {
//      if (err) {
//          return console.error(err);
//      }
//      console.log('stats==', stats);  
//   });
// };

// console.log('=== 之前的时间戳 ===');
// getFileInfo();

// fs.utimes('abc.txt', new Date(), new Date(), function (err) {
//   if (err) {
//      return console.error(err);
//   }
//   console.log('\n=== 现在的时间戳 ===');
//   getFileInfo();
// });

// fs.writeFile('test/int.txt', '我是通过写入的文件内容！',  function(err) {
//    if (err) {
//        return console.error(err);
//    }

//    // 读取数据
//    fs.readFile('test/int.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("异步读取文件数据== " + data.toString());
//    });
// });

// fs.link('test/intqw.txt', function (err) {
//   if (err) {
//      return console.error(err);
//   }
//   console.log('新建文件成功！');
// });

// fs.realpath('test/int.txt', function (err, resolvedPath) {
//   if (err) {
//      return console.error(err);
//   }
//   console.log('resolvedPath==', resolvedPath);
// });

// const buf = new Buffer(1024); // 一个汉字占3个长度，一个字母占1个长度
// console.log('preBuf==', buf);
// // console.log(buf.toString());
// console.log('buf.length==', buf.length);

// fs.open('input.txt', 'r+', function(err, fd) { // 打开文件
//    if (err) {
//        return console.error(err);
//    }
//    console.log('fd==',fd);

//    // 初始 input.txt 文本内容： 删文zzz阿地方aaabbbccc
//    // 初始 abc.txt 文本内容： 123456789一二三
//    // 截取文件
//    fs.truncate('input.txt', 24, function(err){
//       if (err){
//          console.log(err);
//       }

//       // input.txt 文本内容变为： 删文zzz阿地方aaabbb

//       // 读取文件
//       fs.read(fd, buf, 6, buf.length-6, 3, function(err, bytes, buffer){
//         if (err){
//            console.log(err);
//         }
//         console.log('读取字节数==', bytes); // 实际读取到文件的字节数（文zzz阿地方aaabbb，因为从第3 个字节开始读取，所以 删 字没有读取到）
//         console.log('缓冲区对象==', buffer);
        
//         // 仅输出读取的字节
//         if(bytes > 0){  
//           console.log('buf==', buf);
//           console.log('读取内容==', buf.slice(0, bytes).toString()); // 前6个字节乱码，因为是从第6个字节开始写入
//         }
//         fs.open('abc.txt', 'r+', function (error, write_fd) { // 打开待写入的文件
//           console.log('write_fd==', write_fd);
//           fs.write(write_fd, buf, 9, 6, 3, function (error, bytesWite) {
//             if (error) {
//               console.log(error);
//             }

//             // abc.txt 文本内容变为： 123zzz阿一二三
//             // 前3个字节没有变是因为从第3个字节开始写入
//             // 写入的内容为 zzz阿 是因为 buf 中第9个字节开始位置是 zzz，并且只读取6个字节

//             console.log('写入文件成功！');
//             console.log('bytesWite==', bytesWite);
        
//             // 关闭文件
//             fs.close(fd, function(err){
//                if (err){
//                   console.log(err);
//                } 
//                console.log("fd 文件关闭成功！");
//             });
//             fs.close(write_fd, function(err){
//                if (err){
//                   console.log(err);
//                } 
//                console.log("write_fd 文件关闭成功！");
//             });
//           });
//         });
//       });
//     });
// });

/* 输出：
preBuf== <Buffer d0 cf 3c 44 53 02 00 00 50 66 43 44 53 02 00 00 70 6e 3b 44 53 02 00 00 b0 62 3d 44 53 02 00 00 0a 00 00 00 00 00 00 00 d8 62 3d 44 53 02 00 00 05 00 ... >
buf.length== 1024
fd== 3
读取字节数== 21
缓冲区对象== <Buffer d0 cf 3c 44 53 02 e6 96 87 7a 7a 7a e9 98 bf e5 9c b0 e6 96 b9 61 61 61 62 62 62 44 53 02 00 00 0a 00 00 00 00 00 00 00 d8 62 3d 44 53 02 00 00 05 00 ... >
buf== <Buffer d0 cf 3c 44 53 02 e6 96 87 7a 7a 7a e9 98 bf e5 9c b0 e6 96 b9 61 61 61 62 62 62 44 53 02 00 00 0a 00 00 00 00 00 00 00 d8 62 3d 44 53 02 00 00 05 00 ... >
读取内容== ��<DS☻文zzz阿地方
write_fd== 4
写入文件成功！
bytesWite== 6
文件关闭成功！
*/

// fs.rename('/items/node_test/tmp', '/items/node_test/newTmp', function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件重命名成功！");
// });

// fs.unlink('input.txt', function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件删除成功！");
// });

// fs.mkdir("/test",function(err){
//    if (err) {
//        return console.error(err);
//    }
//    console.log("目录创建成功。");
// });

// fs.readdir("../node_test/",function(err, files){
//    if (err) {
//        return console.error(err);
//    }

//    console.log('files==', files);

//    files.forEach(function (file, index) {
//        console.log( index + '==', file );
//    });
// });

// fs.rmdir("test/asd/",function(err){
//    if (err) {
//        return console.error(err);
//    }
//    console.log("删除asd目录成功！");
// });

// fs.appendFile('abc.txt', ' append_content', function (error, a, b) {
//   if (error) {
//     console.log(error);
//   }
//   console.log('追加内容成功！');
// });

// let i = 0;
// const stop = () => {
//   fs.unwatchFile('abc.txt');
// };
// const lister = function (data) {
//   console.log(data);
//   if (++i === 2) {
//     stop();
//   }
// };

// fs.watchFile('abc.txt', lister);

// fs.watchFile('abc.txt', function (newStats, oldStats) {
//  // 回调函数为文件新信息 newStats 和文件原信息 oldStats
//   console.log('newStats==', newStats, '\n', 'oldStats==', oldStats);
//   fs.unwatchFile('abc.txt');
// });

// const FSWatcher = fs.watch('abc.txt', function (data, fileName) {
//   // 回调函数返回为文件修改的方式（change、rename 等）和文件名
//   console.log('data==', data);
//   console.log('fileName==', fileName);
// });

// console.log('fs.FSWatcher==', FSWatcher);

// fs.exists('abc.txt', function (isExist) {
//   // 回调函数返回一个布尔值，true 表示存在，false 表示不存在
//   console.log('isExist==', isExist);
// });

// fs.access('test', function (data) {
//   console.log(data);
// });

//创建可读流
// const readStream = fs.createReadStream('/items/node_test/abc.txt')

// // 监听可读流 open 事件，该事件会在创建文件ReadStream时触发，其回调函数参数是一个文件描述
// readStream.on('open', function(read_fd){
//     console.log('readStream文件已打开！');
//     console.log('read_fd==', read_fd);
// });

// // 创建可写流
// const writeStream = fs.createWriteStream('inpt.txt');

// writeStream.on('open', function(write_fd){
//     console.log('writeStream文件已打开！');
//     console.log('write_fd==', write_fd);
// });

// readStream.on('data', function(data){
//     console.log('data==', data);
//     console.log('收到文件数据==', data.toString());
//     writeStream.write(data);
// });