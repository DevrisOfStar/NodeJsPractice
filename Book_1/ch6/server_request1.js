var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(request, response) {
    // 변수 선언
    var pathname = url.parse(request.url).pathname

    // 페이지 구분
    if(pathname == '/') {
        // index.html 파일 읽기
        fs.readFile('index.html', function(error, data) {
            response.writeHead(200,{'Content-Type' : 'type/html'});
            response.end(data);
        })
    } else if (pathnaem == '/OtherPage') {
        // OtherPage.html 파일 읽기
        fs.readFile('OtherPage.html', function(error, data) {
            response.writeHead(200,{'Content-Type' : 'type/html'});
            response.end(data);
        })
    }
}).listen(52273, function() {
    console.log('server running at http://127.0.0.1:52273')
})