var http = require('http')
var fs = require('fs')

var ejs = require('ejs')

http.createServer(function(request, response) {
    // ejsPage.ejs 파일을 로드.
    fs.readFile('ejsPage.ejs', 'utf8', function(error, data){
        response.writeHead(200, {'Content-Type':'text/html'})
        response.end(ejs.render(data, {name: 'RintIanTta', description:'Hello ejs With Node.js'}))
    });


}).listen(52273, function() {
    console.log('Server is Running')
})