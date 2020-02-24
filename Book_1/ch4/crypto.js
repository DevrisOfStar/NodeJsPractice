var crypto = require('crypto')

var shasum = crypto.createHash('sha256')
shasum.update('crypto_hash')
var output = shasum.digest('hex')

console.log('crypto_hash : ', output)


// 암호화 방법
var key = 'this is secret key'
var input = 'PASSWORD'

// 암호화
var cipher = crypto.createCipher('aes192', key)
cipher.update(input, 'utf8', 'base64')
var cipheredOutput = cipher.final('base64')

// 암호화 해제
var decipher = crypto.createDecipher('aes192', key)
decipher.update(cipheredOutput, 'base64', 'utf8')
var decipheredOutput = decipher.final('utf8')

console.log('원래 문자열 : ', input)
console.log('암호화 : ', cipheredOutput)
console.log('암호화 해제 : ', decipheredOutput)