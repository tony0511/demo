
// 引入 EventEimtter
const EventEmitter = require('events');

// // 继承 Events 原型 prototype 上的方法
// class MyEmitter extends EventEmitter {}

// // 创建 emitter 实例
// const myEmitter = new MyEmitter();

// 继承 Events 原型 prototype 上的方法，并创建 emitter 实例
const myEmitter = new class MyEmitter extends EventEmitter {}();


// // 为了防止 Node.js 进程崩溃，可以在 process 对象的 uncaughtException 事件上注册监听器，最好是选下面的方式处理
// process.on('uncaughtException', (err) => {
//   console.log(err);
//   console.error('有错误！');
// });

// 作为最佳实践，应该始终为 'error' 事件注册监听器。
myEmitter.on('error', (err) => {
  console.log(err);
  console.error('有错误！');
});

// 当一个新事件绑定时触发，once 只处理一次，所以不会无限循环
myEmitter.once('newListener', (event, listener) => {
  console.log('C==', event);
  if (event === 'event') {
    // 在开头插入一个新的监听器
    myEmitter.on('event', function () { // 绑定事件
      console.log('B');
      console.log('function_this==', this); // MyEmitter { domain: null ... });
      setImmediate(() => { // 添加异步操作
        console.log('这个是异步发生的！');
      });
    });
  }
});

// 绑定事件（接收传过来的参数）
myEmitter.on('event', (arg1, arg2) => {
  console.log('A');
  console.log(arg1, arg2); // ARG1 ARG2
  console.log('()=>{}_this==', this); // {}
});

// 当一个事件解除绑定时触发
myEmitter.once('removeListener', (event, listener) => {
  console.log('F==', event);
});

// 绑定事件（只能监听一次，先注销事件，再触发事件）
myEmitter.once('event2', () => {
  console.log('E1');
}).prependOnceListener('event2', () => { // 可链式调用
  console.log('E2');
});

// 获取已注册的事件
console.log('eventNames==', myEmitter.eventNames()); // [ 'error', 'event', 'removeListener', 'event2' ]

// 返回该事件监听器组成的数组
console.log(myEmitter.listeners('event')); // [ [Function], [Function] ]

// 获取正在监听名为 event 的事件的监听器的数量。
console.log('listenerCount==', myEmitter.listenerCount('event')); // 2

// 触发事件（带参数传过去）
myEmitter.emit('event', 'ARG1', 'ARG2');

// 触发事件
myEmitter.emit('event2');


// 触发事件（带参数传过去）
myEmitter.emit('error', new Error('whoops!'));

// 获取和设置事件最大的监听器数量
console.log(myEmitter.getMaxListeners()); // 10
myEmitter.setMaxListeners(15);
console.log(myEmitter.getMaxListeners()); // 15

/* 输出：
C== event
eventNames== [ 'error', 'event', 'removeListener', 'event2' ]
[ [Function], [Function] ]
listenerCount== 2
B
function_this== MyEmitter {
  domain: null,
  _events:
   { error: [Function],
     event: [ [Function], [Function] ],
     removeListener: { [Function: bound onceWrapper] listener: [Function] },
     event2: [ [Object], [Object] ] },
  _eventsCount: 4,
  _maxListeners: undefined }
A
ARG1 ARG2
()=>{}_this== {}
F== event2
E2
E1
Error: whoops!
    at Object.<anonymous> (d:\items\demo\node_test\events.js:71:25)
    at Module._compile (module.js:635:30)
    at Object.Module._extensions..js (module.js:646:10)
    at Module.load (module.js:554:32)
    at tryModuleLoad (module.js:497:12)
    at Function.Module._load (module.js:489:3)
    at Function.Module.runMain (module.js:676:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
有错误！
10
15
这个是异步发生的！
*/