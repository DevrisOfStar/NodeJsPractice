var express = require('express')
var morgan = require('morgan')

var app = express()

//app.use(morgan('combined')) // 접속 환경을 log로 보여줌
app.use(morgan(':method + :date')) // method방식과 date를 log로 보여줌
app.use(function(request, response) {
    response.send('<h1>express basic</h1>')
})

app.listen(52273, ()=>console.log('server running'))