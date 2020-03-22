var express = require('express')

var app = express()

app.use(function(request, response, next){
    var name = request.query.name
    var region = request.query.region
    // ex) localhost:52273?name=name&region=korea
    response.send('<h1>' + name + '-' + region + '</h1>')
})

app.listen(52273, ()=>console.log('server running'))