const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let i = 0;
let answer = ""; 
while (i<input.length){
    let[a,b] = input[i].split(" ").map((el)=> +(el));
    if(a === 0 && b === 0) break;
    else answer += a+b+("\n");
    i++;
}
console.log(answer);