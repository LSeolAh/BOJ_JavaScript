const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");
let N = Number(input[0].split(" ")[0]);
let X = Number(input[0].split(" ")[1]);
let arr = input[1].split(" ").map((el) => Number(el));
let answer="";

for(let i= 0; i<N; i++){
    if(arr[i]< X)
        answer += (arr[i])+(" ");
}

console.log(answer);