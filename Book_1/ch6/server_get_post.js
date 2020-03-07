var http = require('http')

http.createServer(function(request, response) {
    // request.method를 통해서 method 속성을 구분할 수 있음.
    if(request.method =='GET') {
        console.log('GET 방식')
    }
    else if(request.method == 'POST') {
        console.log('POST 방식')
    }

}).listen(52273, function() {
    console.log('running server')
})