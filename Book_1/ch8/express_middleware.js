var express = require('express')

var app = express()


// 미들웨어 설정 1
app.use(function(request, response, next) {
    console.log('first middle-ware')
    next()

})

// 미들웨어 설정 2
app.use(function(request, response, next) {
    console.log('2nd middle-ware')
    next()

})

// 미들웨어 설정 3
app.use(function(request, response, next) {
    console.log('3rd middle-ware')

    // 응답
    response.writeHead(200, {'Content-Type':'text/html'})
    response.end('<h1>express basic</h1>')
})


app.listen(52273, ()=>console.log('server running'))