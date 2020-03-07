var http = require('http')

http.createServer(function(request, response) {
    var date = new Date()
    date.setDate(date.getDate() + 7)
    // 쿠키 저장
    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : [
            'breakfast = toast; Expires = ' + date.toUTCString(),
            'dinner = chicken'
        ]
    })
    // 쿠키 로드
    response.end('<h1>' + request.headers.cookie + '</h1>')
}).listen(52273, function() {
    console.log('server is running')
})

