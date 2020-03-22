var express = require('express')

// 서버 생성
var app = express()

// request 이벤트 리스너 설정
app.use(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>Hello express</h1>')
})

app.listen(52273, ()=>console.log('Server Running'))