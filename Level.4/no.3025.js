const file = process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let array = [];

for (i = 0; i <= 9; i++) array.push(input[i] % 42);

//중복값이 있는 배열 Set객체로 만들어 중복 제거
let set = new Set(array);

//전개연산자를 사용하여 Set객체를 다시 배열로 변환
let answer = [...set];

console.log(answer.length);
