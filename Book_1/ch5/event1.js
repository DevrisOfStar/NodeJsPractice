
// process 객체에 exit 이벤트 연결
process.on('exit', function(code){
    console.log('exit!')
})


// process 객체에 uncaughtException 이벤트 연결
process.on('uncaughtException', function(error){
    console.log('error')
})


// 2초 간격으로 3번 예외를 발생시킴
var count = 0
var test = function() {
    // 탈출코드
    count = count + 1
    if(count > 3) return

    // 예외를 강제로 발생
    setTimeout(test, 2000)
    error.error.error()
}
setTimeout(test,2000)


