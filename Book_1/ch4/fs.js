var fs = require('fs')

// 동기방식 - 파일 읽기
try {
    var test = fs.readFileSync('textfile.txt', 'utf8')
    console.log(test)
} catch(e) {
    console.log(e)
}

// 동기방식 - 파일 쓰기

try {
    fs.writeFileSync('textfile.txt', 'Hello, world', 'utf8')
    console.log('file write complete')
} catch(e) {
    console.log(e)
}



// 비동기 방식 - 파일 읽기
fs.readFile('textfile.txt','utf8', function(error, data) {
    if(error) {
        console.log(error)
    }
    else {
        console.log(data)
    }
})

// 비동기 방식 - 파일 쓰기

fs.writeFile('textfile.txt', 'Hello, world', 'utf8', function(error) {
    if(error) {
        console.log(error)
    }
    else {
        console.log('File write complete')
    }
})
