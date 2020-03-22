var express = require('express')

var app = express()

// 라우터 설정
app.get('/a', function(request, response) {
    response.send('<a href="/b">Go to B </a>')
})

app.get('/b', function(request, response) {
    response.send('<a href="/a">Go to A </a>')
})
app.get('/page/:id', function(request, response) {
    // 변수 설정
    var name = request.params.id

    response.send('<h1>' + name + '<h1>')
})

app.listen(52273, ()=>console.log('server running'))