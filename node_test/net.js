const net = require('net');

// console.log(net);

// const server = net.createServer((socket) => {
//   socket.end('goodbye\n');
// }).on('error', (err) => {
//   // handle errors here
//   // throw err;
//   if (err.code === 'EADDRINUSE') {
//     console.log('Address in use, retrying...');
//     setTimeout(() => {
//       server.close();
//       server.listen(PORT, HOST);
//     }, 1000);
//   }
// });

// // grab an arbitrary unused port.
// server.listen(() => {
//   console.log('opened server on', server.address());
// });

console.log(net.isIP('112512.12')); // 0
console.log(net.isIP('10.1.5.81')); // 4
console.log(net.isIP('1010:1014:1101:4174::4174')); // 6
console.log(net.isIPv4('10.1.5.81')); // true
console.log(net.isIPv6('1010:1014:1101:4174::4174')); // true
console.log(net.isIPv6('1010::1101:4174:10.1.5.81')); // true

const server = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});

server.on('error', (err) => {
  throw err;
});

server.listen(8124, () => {
  console.log('opened server on', server.address());
  console.log('server bound');
});