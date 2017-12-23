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

// debugger;

// const script = new vm.Script('count += 1; name = "kitty"; console.log("global==", global)');

// const context = vm.createContext(sandbox);
// for (let i = 0; i < 2; ++i) {
//   script.runInContext(context);
// }

// console.log(util.inspect(sandbox));

// // global==  undefined
// // { animal: 'cat', count: 4, name: 'kitty' }

// ==================
// const script = new vm.Script('globalVar = "set"; "global==", global)');

// const sandboxes = [{}, {}];
// sandboxes.forEach((sandbox) => {
//   script.runInNewContext(sandbox);
// });

// console.log(util.inspect(sandboxes));

// // global==  undefined
// // [{ globalVar: 'set' }, { globalVar: 'set' }]

// ================
// global.globalVar = 0;
// console.log(globalVar); // 0

// const script = new vm.Script('globalVar += 1; "global==", global)', { filename: 'myfile.vm' });

// for (let i = 0; i < 1; ++i) {
//   script.runInThisContext();
// }

// console.log(globalVar);

// // global== { console: [Getter], ... }
// // 1