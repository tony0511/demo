const url = require('url');

// console.log(url);

// var urlString = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

// console.log(url.parse(urlString));

/* 输出：
Url {
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash', // 完整 URL
  protocol: 'http:', // 请求协议
  slashes: true, // 协议的“：”号后是否有“/”
  auth: 'user:pass', // 认证信息
  host: 'host.com:8080', // 主机名（包括端口信息）
  hostname: 'host.com', // 主机名
  port: '8080', // 端口
  path: '/p/a/t/h?query=string', // 路径（包括 pathname 和 search）
  pathname: '/p/a/t/h', // 路径
  search: '?query=string', // 查询对象（包含?）
  query: 'query=string', // 查询对象参数部分（不包含?）
  hash: '#hash' // 锚点
}
*/

// var urlObj = { 
//   protocol: 'http:',
//   slashes: true,
//   hostname: 'itbilu.com',
//   port: 80,
//   hash: '#hash',
//   search: '?query=string',
//   path: '/nodejs?query=string'
// };

// console.log(url.format(urlObj)); // http://itbilu.com:80?query=string#hash

// ====================