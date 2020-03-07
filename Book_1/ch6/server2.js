var fs = require('fs')

require('http').createServer(function(request, response){
    // 응답
    fs.readFile('HTMLPage.html', function(error, data){
        response.writeHead(200, {'Content-Type': 'text/html'}) // 이미지의 경우, image/jpeg, 음악 파일의 경우, audio/mp3
        //response.end('<h1> Hello Web Server with Node.js </h1>')
        response.end(data)
    })
    
}).listen(52273, function() {
    console.log('server running at http://127.0.0.1:52273')
})