const util = require('util');

console.log(util);

// function Base() { 
//   this.name = 'base'; 
//   this.base = 1991; 
//   this.sayHello = function() { 
//   console.log('Hello ' + this.name); 
//   }; 
// } 
// Base.prototype.showName = function() { 
//     console.log(this.name);
// }; 
// function Sub() { 
//     this.name = 'sub'; 
// } 
// util.inherits(Sub, Base); 
// var objBase = new Base(); 
// objBase.showName(); 
// objBase.sayHello(); 
// console.log(objBase); 
// var objSub = new Sub(); 
// objSub.showName();
// //objSub.sayHello(); 
// console.log(objSub);

// console.log(util.inspect(objBase)); 
// console.log(util.inspect(objBase, true)); 

// console.log('1==', util.isArray([]), util.isArray({}));
// console.log('2==', util.isRegExp(/^gh$/g), util.isRegExp('abc'));
// console.log('3==', util.isDate(new Date()), util.isDate('2017-12-08'));
// console.log('4==', util.isError(new Error()), util.isError(new TypeError()), util.isError('wes'));
// console.log('5==', util.isBoolean(true), util.isBoolean('true'));
// console.log('6==', util.isNull(null), util.isNull(undefined));
// console.log('7==', util.isUndefined(undefined), util.isUndefined(null));
// console.log('8==', util.isNullOrUndefined(null), util.isNullOrUndefined(undefined), util.isNullOrUndefined(''));
// console.log('9==', util.isNumber(12), util.isNumber('12'));
// console.log('10==', util.isString('true'), util.isString(true));
// console.log('11==', util.isSymbol(Symbol()), util.isSymbol('wes'));console.log('5==', util.isString('true'), util.isString(true));
// console.log('12==', util.isFunction(function(){}), util.isFunction({}));
// console.log('13==', util.isBuffer(new Buffer(1024)), util.isBuffer({}));
// console.log('14==', util.isPrimitive(10), util.isPrimitive(true), util.isPrimitive('asa'), util.isPrimitive(null), util.isPrimitive(undefined), util.isPrimitive({}), util.isPrimitive([]), util.isPrimitive(function(){}));

