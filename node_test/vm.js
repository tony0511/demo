const vm = require('vm');
const util = require('util');

// console.log(util.inspect(vm));
/*
{ Script: [Function: ContextifyScript],
  createContext: [Function: createContext],
  createScript: [Function: createScript],
  runInDebugContext: [Function: runInDebugContext],
  runInContext: [Function: runInContext],
  runInNewContext: [Function: runInNewContext],
  runInThisContext: [Function: runInThisContext],
  isContext: [Function: isContext] }
*/

// const sandbox = {
//   animal: 'cat',
//   count: 2
// };

// const script = new vm.Script('count += 1; name = "kitty";');

// const context = vm.createContext(sandbox);
// for (let i = 0; i < 10; ++i) {
//   script.runInContext(context);
// }

// console.log(util.inspect(sandbox));

// // { animal: 'cat', count: 12, name: 'kitty' }

// ==================
// const script = new vm.Script('globalVar = "set"');

// const sandboxes = [{}, {}, {}];
// sandboxes.forEach((sandbox) => {
//   script.runInNewContext(sandbox);
// });

// console.log(util.inspect(sandboxes));

// // [{ globalVar: 'set' }, { globalVar: 'set' }, { globalVar: 'set' }]

// ================
global.globalVar = 0;

const script = new vm.Script('globalVar += 1', { filename: 'myfile.vm' });

for (let i = 0; i < 1000; ++i) {
  script.runInThisContext();
}

console.log(globalVar);

// 1000