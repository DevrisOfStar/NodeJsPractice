// EventEmitter 객체 생성 
var events = require('events')
var custom = new events()


// 이벤트 연결
custom.on('tick', function() {
    console.log('event')
})

custom.emit('tick')
