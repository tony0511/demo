const { StringDecoder } = require('string_decoder');
// const StringDecoder = require('string_decoder'); // { StringDecoder: [Function: StringDecoder] }

const decoder = new StringDecoder('utf8');
console.log(decoder);
/*
StringDecoder {
  encoding: 'utf8',
  fillLast: [Function: utf8FillLast],
  lastNeed: 0,
  lastTotal: 0,
  lastChar: <Buffer 00 00 00 00> }
*/
 
const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro)); // €
console.log(decoder);
/*
StringDecoder {
  encoding: 'utf8',
  fillLast: [Function: utf8FillLast],
  lastNeed: 0,
  lastTotal: 0,
  lastChar: <Buffer 00 00 00 00> }
*/

const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent)); // ¢

decoder.write(Buffer.from([0xE2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xAC]))); // €
console.log(decoder);
/*
StringDecoder {
  encoding: 'utf8',
  fillLast: [Function: utf8FillLast],
  lastNeed: 0,
  lastTotal: 3,
  lastChar: <Buffer e2 82 ac 00> }
*/