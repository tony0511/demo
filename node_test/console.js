console.assert(true, 'does nothing'); // 通过
console.assert(false, 'Whoops %s', 'didn\'t work'); // 后面代码不会继续运行了
// AssertionError: Whoops didn't work

console.log('23-%s', 'string');
console.log('23-%i', 20);
console.log('23-%d', 20);
console.log('23-%d');
console.log('23-%f', 20.2165);
console.log('23-%o', {a: 'dsf'});
console.log('23-%O', {a: 'dsf'});
console.log('23-%j', true);
console.log('23-%j', {a: 'dsf'});
console.log('23-%%');

/* 输出：
23-string
23-20
23-20
23-%d
23-20.2165
23-{ a: 'dsf' }
23-{ a: 'dsf' }
23-true
23-{"a":"dsf"}
23-%%
*/


console.count('abc');
console.count('abc');
console.countReset('abc');
console.count('abc');

/* 输出：
abc: 1
abc: 2
abc: 1
*/

console.dir({ a: { b: { c: 'asdasd' }, d: () => {} } }); // 在 obj 上使用 util.inspect() 并打印结果字符串到 stdout。

console.time('asd');
console.timeEnd('asd'); // asd: 0.064ms

console.log('这是第一层');
console.group()
console.log('这是第二层');
console.log('这是第二层');
console.group()
console.log('这是第三层');
console.groupEnd();
console.log('回到第二层');
console.groupEnd();
console.log('回到第一层');

/*输出：
这是第一层
  这是第二层
  这是第二层
    这是第三层
  回到第二层
回到第一层
*/

