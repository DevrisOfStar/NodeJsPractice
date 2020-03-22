var fs = require('fs')
var express = require('express')
var bodyParser =  require('body-parser')

// 더미 DB 구현
var DummyDB = (function() {

    // 변수 선언
    var DummyDB = {}
    var storage = []
    var count = 1

    // 메서드 구현
    DummyDB.get = (id) => {
        if(id) {
            // 변수 가공
            id = (typeof id == 'string') ? Number(id) : id

            // 데이터 선택
            for(var i in storage) 
                if(storage[i].id == id) { return storage[i]}
        }
        
        else {
            return storage
        }
    }

    DummyDB.insert = (data)=> {
        data.id = count++
        storage.push(data)
        return data
    }


    DummyDB.remove = (id) => {
        id = (typeof id == 'string') ? Number(id) : id

        // 제거
        for(var i in storage) if(storage[i].id == id) {
            storage.splice(i, 1)

            return true // 제거 성공
        }
        return false // 제거 실패
    }
    
    // 리턴
    return DummyDB
})()

var app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))

// 라우터 설정
app.get('/user', function(request, response){
    response.send(DummyDB.get())
})

app.get('/user/:id', function(request, response){
    response.send(DummyDB.get(request.params.id))
})

app.post('/user', function(request, response){
    // 변수 선언
    var name = request.body.name
    var region = request.body.region
    
    // 유효성 검사
    if(name && region) {
        response.send(DummyDB.insert({
            name : name,
            region : region
        }))
    }
    else {
        throw new Error('error')
    }
})

// 데이터 수정
app.put('/user/:id', function(request, response){
    // 변수
    var id = request.params.id
    var name = request.body.name
    var region = request.body.region

    // DB 수정
    var item = DummyDB.get(id)
    item.name = name || item.name
    item.region = region || item.region

    // 응답
    response.send(item)
})

app.delete('/user/:id', function(request, response){
    response.send(DummyDB.remove(request.params.id))

})

app.listen(52273, ()=> console.log('server running'))


