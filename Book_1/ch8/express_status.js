var express = require('express')

var app = express()

// 미들웨어 설정
app.use(function(request, response, next) {
    //응답
    response.status(404).send('<h1>Error</h1>')
})

app.listen(52273, ()=>console.log('server running'))
