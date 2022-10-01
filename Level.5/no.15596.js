const file = process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let n = input[0];
let answer = 0;

function sum(n) {
  for (i = 1; i <= n; i++) {
    answer += i;
  }
  console.log(answer);
}
sum(n);
