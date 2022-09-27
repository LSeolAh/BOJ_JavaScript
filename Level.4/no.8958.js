const file = process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let n = input[0];
let cnt = 0;
let answer = "";
let sum = 0;

for (let i = 1; i <= n; i++) {
  cnt = 0;
  sum = 0;
  let N = input[i].trim().split("");
  for (let j = 0; j < N.length; j++) {
    if (N[j] === "O") {
      cnt++;
      sum += cnt;
    } else cnt = 0;
  }
  answer += sum + "\n";
}
console.log(answer);
