global.test = 'test===';
console.log('main 开始');
const a = require('./a.js');
const b = require('./b.js');
console.log('在 main 中，a.done=%j，b.done=%j', a.done, b.done);
console.log(this === exports, exports === module.exports);
// console.log('global===', global);
function asdas () {
  console.log('this===', this === global, this.test);
}
asdas();