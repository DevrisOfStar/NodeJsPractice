var express = require('express')

var app = express()

app.use(function(request, response) {
    // 데이터를 생성
    var output = []
    for (var i = 0; i<3; i++) {
        output.push({
            count:i,
            name: 'name - ' + i
        })
    }

    // 응답
    response.send(output)
})

app.listen(52273, ()=>console.log('server running'))