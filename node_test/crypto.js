
// 加密和哈希算法

const crypto = require('crypto');

// const hash = crypto.createHash('md5');
// const hash = crypto.createHash('sha1');
// const hash = crypto.createHash('sha256');
const hash = crypto.createHash('sha512');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));

// md5: 7e1977739c748beac0c0fd14fd26a544
// sha1: 1f32b9c9932c02227819a4151feed43e131aca40
// sha256: 940371b8619c00ed7a39d46ba45e71b5081ea19e35fa7d8315e5972a501465af
// sha512: 7628241ce84a5b88ea745309ce984e9fd09a4ebbd041be877bd1670b77f70ee04be877818ceee2924b23cabfd8d4ed8808ed25d2a90cccb1a0cbd7ccc1067ac1

// ========================

// 与 MD5 或 SHA1 等哈希算法不同的是，Hmac 还需要一个密钥，只要密钥发生了变化，那么同样的输入数据也会得到不同的签名，因此，可以把Hmac理解为用随机数“增强”的哈希算法。
const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex')); // 7628241ce84a5b88ea745309ce984e9fd09a4ebbd041be877bd1670b77f70ee04be877818ceee2924b23cabfd8d4ed8808ed25d2a90cccb1a0cbd7ccc1067ac180f7e22570bed1fa3ef683edce5d0890e268e1ca8d1bd0c382bc766f3744be9f

// ========================

// AES 是一种常用的对称加密算法，加解密都用同一个密钥。crypto 模块提供了 AES 支持，但是需要自己封装好函数，便于使用
// AES 除了密钥外还可以指定IV（Initial Vector），不同的系统只要IV不同，用相同的密钥加密相同的数据得到的加密结果也是不同的。
// 加密和解密最好遵循 同样的AES算法、字符串密钥、IV 相同，以及加密后的数据是否统一为 hex 或 base64 格式。
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key); // aes192、aes-128-ecb、aes-256-cbc
    var crypted = cipher.update(data, 'utf8', 'hex');
    console.log('crypted===', crypted);
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    console.log('decrypted===', decrypted);
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'Hello, this is a secret message!';
var key = 'Password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data); // Plain text: Hello, this is a secret message!
console.log('Encrypted text: ' + encrypted); // Encrypted text: 8a944d97bdabc157a5b7a40cb180e713f901d2eb454220d6aaa1984831e17231f87799ef334e3825123658c80e0e5d0c
console.log('Decrypted text: ' + decrypted); // Decrypted text: Hello, this is a secret message!

// =========================

// Diffie-Hellman
/*
  DH算法是一种密钥交换协议，它可以让双方在不泄漏密钥的情况下协商出一个密钥来。DH算法基于数学原理，比如小明和小红想要协商一个密钥，可以这么做：

  小明先选一个素数和一个底数，例如，素数p=23，底数g=5（底数可以任选），再选择一个秘密整数a=6，计算A=g^a mod p=8，然后大声告诉小红：p=23，g=5，A=8；

  小红收到小明发来的p，g，A后，也选一个秘密整数b=15，然后计算B=g^b mod p=19，并大声告诉小明：B=19；

  小明自己计算出s=B^a mod p=2，小红也自己计算出s=A^b mod p=2，因此，最终协商的密钥s为2。

  在这个过程中，密钥2并不是小明告诉小红的，也不是小红告诉小明的，而是双方协商计算出来的。第三方只能知道p=23，g=5，A=8，B=19，由于不知道双方选的秘密整数a=6和b=15，因此无法计算出密钥2。
*/

// xiaoming's keys:
var ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log('Prime: ' + prime.toString('hex')); // Prime: 82cc534dc3e4f293fa520427740cea17a3e34c95f028769c16ee4d18fb2c59654b53a5d0c6047bcecafd778593c4b89f3dfd3b1d8971fdfe38f190be46c5ba8b
console.log('Generator: ' + generator.toString('hex')); // Generator: 02

// xiaohong's keys:
var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

// exchange and generate secret:
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex')); // Secret of Xiao Ming: 251f5b42d59e41b832fcc1e14d1d83ed6a32ddaa6fb3ef233269eac3954c9c2654250b2c1a2ec5a4530b1cd06c00cc191bfc759bb12330c2367d7da313f3dc9b
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex')); // Secret of Xiao Ming: 251f5b42d59e41b832fcc1e14d1d83ed6a32ddaa6fb3ef233269eac3954c9c2654250b2c1a2ec5a4530b1cd06c00cc191bfc759bb12330c2367d7da313f3dc9b