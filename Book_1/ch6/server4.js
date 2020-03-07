var http = require('http')

http.createServer(function(request, response) {
    // redirect
    response.writeHead(302, {'Location': 'http://www.github.com/devrisofstar'}) // ex) response.writeHead(404)
    response.end()
}).listen(52273, function() {
    console.log('server running at http://127.0.0.1:52273')
})