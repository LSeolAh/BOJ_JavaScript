// 변수 선언
// 1. var -> 지양
// 2. const -> 지향
// 3. let -> 지향

// 입력값
// 1. Readline
// 2. fs

// 프린트
// console.log();

//실행할때는 bash창에 node [file이름]


//라이브러리 가져오는 너낌
const rl = require("readline").createInterface ({
    input: process.stdin, 
    output: process.stdout,
})

let input = [];

//입력 받는 곳
rl.on("line", (line) => {
    input = line.split("\n").map((el) => Number(el));
    rl.close(); //안하면 계속 입력 받음
})

//출력하는 곳
rl.on("close", () => {
    console.log(input[0] + input[1]);
    process.exit();
})