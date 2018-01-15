'use strict';

var
  fs = require('fs'),
  url = require('url'),
  path = require('path'),
  http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

// 创建服务器:
var server = http.createServer(function (request, response) {
  // 获得URL的path，类似 '/css/bootstrap.css':
  var pathname = url.parse(request.url).pathname;
  // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
  var filepath = path.join(root, pathname);
  // 获取文件状态:
  fs.stat(filepath, function (err, stats) {
    if (!err && stats.isFile()) {
      // 没有出错并且文件存在:
      console.log('200 ' + request.url);
      // 发送 200 响应和一些 响应头
      response.writeHead(200, {'Content-Type': 'text/html', 'Cache-Control': 'no-cache'});
      // 将文件流导向 response
      fs.createReadStream(filepath).pipe(response);
    } else {
      filepath = path.join(filepath, 'index.html');
      console.log(filepath);
      fs.stat(filepath, (err, stats) => {
        if (!err && stats.isFile()) {
          // 没有出错并且文件目录存在:
          console.log('200 ' + request.url);
          // 发送200响应:
          response.writeHead(200, {'Content-Type': 'text/html', 'Cache-Control': 'no-cache'});
          // 将文件流导向response:
          fs.createReadStream(filepath).pipe(response);
        } else {
          // 出错了或者文件不存在:
          console.log('404 ' + request.url);
          // 发送404响应:
          response.writeHead(404);
          // 写上返回内容
          // response.write('404 pre wrods！');
          // 结束请求并返回内容
          response.end('404 Not Found');
        } 
      });
    }
  });
});

server.listen(8080, '127.0.1.1'); // 默认为 127.0.0.1 (localhost)

console.log('Server is running at http://127.0.1.1:8080/');