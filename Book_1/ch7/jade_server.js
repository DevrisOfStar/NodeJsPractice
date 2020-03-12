var http = require('http')
var jade = require('jade')
var fs = require('fs')

http.createServer(function(request, response) {
    // JadePage.jade 파일 로드
    fs.readFile('JadePage.jade', 'utf8', function(error, data){
        // jade 모듈을 사용
        var fn = jade.compile(data)

        // 출력
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.end(fn({name:'RintIanTta', description:'Hello jade'}))

    })
}).listen(52273, function(){
    console.log('Server Running')
})