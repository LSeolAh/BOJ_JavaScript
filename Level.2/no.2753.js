// | -> or 연산자
// & -> and 연산자

const file =
process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim();

const A = Number(input);

if((A % 100 != 0) | (A % 400 == 0))
    if(A % 4 == 0)
        console.log("1");
    else
        console.log("0");