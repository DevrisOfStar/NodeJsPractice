var http = require('http')

// 서버를 생성
var server = http.createServer();

// 서버를 실행
server.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273')
});

// server 객체에 이벤트를 연결
server.on('request', function(code) {
    console.log('Request on')
})

server.on('connection', function(code) {
    console.log('Connection on')
})

server.on('close', function(code) {
    console.log('close on')
})

// 100초 후 함수를 실행
var test = function() {
    // 서버를 종료
    server.close()
}

setTimeout(test, 100000)