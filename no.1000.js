//실행할때는 bash창에 node [file이름]

//라이브러리 가져오는 너낌
const rl = require("readline").createInterface ({
    input: process.stdin, 
    output: process.stdout,
})

let input = [];

//입력 받는 곳
rl.on("line", (line) => {
    input = line.split(" ").map((el) => Number(el));
    rl.close(); //안하면 계속 입력 받음
})

//출력하는 곳
rl.on("close", () => {
    console.log(input[0] + input[1]);
    process.exit();
})

//좀 더 해봐야함
// const input = require("fs").readFileSync(0).toString().trim().map((el) => Number(el));

// const A = input[0];
// const B = input[1];

// console.log(A + B);