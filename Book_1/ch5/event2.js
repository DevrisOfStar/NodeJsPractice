
var onUncaughtException = function(error) {
    console.log('error!')

    // 이벤트를 제거합니다
    process.removeListener('uncaughtException', onUncaughtException)
}

process.on('uncaughtException', onUncaughtException)

process.on('event', function() {
    console.log('event!!')
})
// process.once('uncaughtException', onUncaughtException) 과 동일

var test = function(){
    setTimeout(test, 2000)
    process.emit('event') // event 강제실행
    error.error.error()
}

setTimeout(test, 2000)