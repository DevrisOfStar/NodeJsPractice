var express = require('express')

var app = express()

app.use(function(request, response) {
    // User-Agent 속성을 추출
    var agent = request.header('User-Agent')
    console.log(request.headers)
    console.log(agent)

    // 응답, 상태코드만 전송할때는 sendStatus 사용
    response.sendStatus(200)
})

app.listen(52273, ()=>console.log('server running'))