var url = require('url')

var querystring = require('querystring')

var parseObject = url.parse('https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=node+js')

// url의 Query부분을 parsing
console.log(querystring.parse(parseObject.query))
