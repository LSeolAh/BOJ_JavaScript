//실행할때는 bash창에 node [file이름]

const file =
    process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A + B);