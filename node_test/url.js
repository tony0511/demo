const url = require('url');
const URL = url.URL;
let urlObj = null, URLObj = null;

console.log(url);

const urlString = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';

console.log(urlObj = url.parse(urlString));

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

console.log(url.parse('//user:pass@host.com:8080/p/a/t/h?query=string#hash', true, true));

// 第三个参数为 true 使得能够正确解析不带协议的 url。默认为 false
/* 输出：
 Url {
  protocol: null,
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: { query: 'string' }, // 第二个参数为 true 让 query 以对象的方式显示。默认为 false
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: '//user:pass@host.com:8080/p/a/t/h?query=string#hash' }
*/

console.log(URLObj = new URL(urlString));

/* 输出：
URL {
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash',
  origin: 'http://host.com:8080',
  protocol: 'http:',
  username: 'user',
  password: 'pass',
  host: 'host.com:8080',
  hostname: 'host.com',
  port: '8080',
  pathname: '/p/a/t/h',
  search: '?query=string',
  searchParams: URLSearchParams { 'query' => 'string' },
  hash: '#hash' }
*/

const urlObj1 = { 
  protocol: 'http:',
  slashes: true,
  hostname: 'itbilu.com',
  port: 80,
  hash: '#hash',
  search: '?query=string',
  path: '/nodejs?query=string'
};

console.log(url.format(urlObj1)); // http://itbilu.com:80?query=string#hash

// ====================

console.log(urlObj.format()); // http://user:pass@host.com:8080/p/a/t/h?query=string#hash

console.log(URLObj.toString()); // http://user:pass@host.com:8080/p/a/t/h?query=string#hash
console.log(URLObj.toJSON()); // http://user:pass@host.com:8080/p/a/t/h?query=string#hash

// ====================

console.log(URLObj.searchParams.get('query')); // string // 返回键是 name 的第一个键值对的值
console.log(URLObj.searchParams.getAll('query')); // [ 'string' ] // 返回键是 name 的所有键值对的值组成的数组
console.log(URLObj.searchParams.has('query')); // true // 返回是否有该参数
console.log(URLObj.searchParams.toString()); // query=string

for (const [name, value] of URLObj.searchParams) {
  console.log(name, value); // query string
}
for (var item of URLObj.searchParams.entries()) {
  console.log(item); // [ 'query', 'string' ]
}
for (var item of URLObj.searchParams.keys()) {
  console.log(item); // query
}
for (var item of URLObj.searchParams.values()) {
  console.log(item); // string
}

URLObj.searchParams.forEach((value, key, searchParams) => {
  console.log(value, key, searchParams); // string query URLSearchParams { 'query' => 'string' }
});
URLObj.searchParams.set('query', 'note');
console.log(URLObj.toString()); // http://user:pass@host.com:8080/p/a/t/h?query=note#hash
URLObj.searchParams.delete('query');
URLObj.searchParams.append('abc', '123');
console.log(URLObj.toString()); // http://user:pass@host.com:8080/p/a/t/h?abc=123#hash

// ======================

const { URLSearchParams } = require('url');
const params = new URLSearchParams('query[]=abc&type=search&query[]=123');
params.sort();
console.log(params.toString()); // Prints query%5B%5D=abc&query%5B%5D=123&type=search

// =====================

const querystring = require('querystring');

console.log(querystring.parse('query=abc&type=search&query=123')); // { query: [ 'abc', '123' ], type: 'search' }
console.log(querystring.stringify({ query: [ 'abc', '123' ], type: 'search' }, '$', '<=>')); // query<=>abc$query<=>123$type<=>search
console.log(querystring.parse('query<=>abc$query<=>123$type<=>search', '$', '<=>')); // { query: [ 'abc', '123' ], type: 'search' }
console.log(querystring.escape('<哈哈>')); // %3C%E5%93%88%E5%93%88%3E
console.log(querystring.unescape('%3C%E5%93%88%E5%93%88%3E')); // <哈哈>








