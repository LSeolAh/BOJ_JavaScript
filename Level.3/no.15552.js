//매번 콘솔을 찍는 것이 아니라 변수 하나에 저장해 둔 후 그 변수를 마지막에 콘솔 찍는 방식으로 해야함
//변수를 문자열로 설정

const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let count = Number(input[0]);
let answer= "";
for (let i = 1; i<input.length; i++) {
    let A = Number(input[i].split(" ")[0]);
    let B = Number(input[i].split(" ")[1]);
    answer += A+B+("\n");
}
console.log(answer);