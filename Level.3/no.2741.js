const file = 
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim();

let N = Number(input);
let answer = "";
for(i=1; i<=N;i++){
    answer += i+("\n");
}
console.log(answer);