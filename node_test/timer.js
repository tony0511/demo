const util = require('util');
const setImmediatePromise = util.promisify(setImmediate);

setImmediatePromise('foobar').then((value) => {
  console.log(value);
  // value === 'foobar' (passing values is optional)
  // This is executed after all I/O callbacks.
});

// or with async function
async function timerExample() {
  console.log('Before I/O callbacks');
  await setImmediatePromise();
  console.log('After I/O callbacks');
}
timerExample()

/* 输出：
  Before I/O callbacks
  foobar
  After I/O callbacks
*/