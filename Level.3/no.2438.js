const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim();

let count = Number(input);
let star = "*";
let answer = "";

for(let i=1;i<=count;i++){
    for(let j=1;j<=i;j++)
        answer += star
    console.log(answer);
    answer = "";
}