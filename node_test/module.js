
const module1 = require('./module1.js');

console.log(module1.a);

// 获取当前文件的文件名
// console.log(__filename); // d:\items\demo\node_test\module.js

// 获取当前目录路径
// console.log(__dirname); // d:\items\demo\node_test

// 获取解析后的文件绝对路径
// console.log(require.resolve('./url.js')); // d:\items\demo\node_test\url.js

// 返回被查询解析路径的模块的路径。
// console.log(require.resolve.paths('./url.js')); // [ 'd:\\items\\demo\\node_test']

// console.log(module === require.main); // true
// console.log(module.exports === exports); // true

// 获取主模块文件名（当前应用程序的入口点）
// console.log(require.main.filename); // d:\items\demo\node_test\module.js
// console.log(require);

/* 输出：
{ [Function: require]
  resolve: { [Function: resolve] paths: [Function: paths] },
  main:
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: 'd:\\items\\demo\\node_test\\module.js',
     loaded: false,
     children: [],
     paths:
      [ 'd:\\items\\demo\\node_test\\node_modules',
        'd:\\items\\demo\\node_modules',
        'd:\\items\\node_modules',
        'd:\\node_modules' ] },
  extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
  cache:
   { 'd:\items\demo\node_test\module.js':
      Module {
        id: '.',
        exports: {},
        parent: null,
        filename: 'd:\\items\\demo\\node_test\\module.js',
        loaded: false,
        children: [],
        paths: [Array] } } }
*/
// console.log(require.prototype); // require {}