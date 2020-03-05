// app.js -- rint.js
// EventEmitter 생성
var events = require('events')
exports.timer = new events()

// event 강제 발생
setInterval(function(){
    exports.timer.emit('tick')
}, 1000)