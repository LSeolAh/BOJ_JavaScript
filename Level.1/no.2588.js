const file = 
process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);

//B의 숫자가 하나씩 나눠짐
//백의 자리 수부터 [0]으로 들어감
const a = (B + "").split("");

console.log(A * a[2]);
console.log(A * a[1]);
console.log(A * a[0]);
console.log(A * B);