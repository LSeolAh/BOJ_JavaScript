const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let money = Number(input[0]);
let many = input[1];
let answer = 0;


for(i=2; i<input.length; i++){
    let mul = Number((input[i].split(" ")[0]) * (input[i].split(" ")[1]));
    answer += mul;
}

if(money == answer) console.log("Yes");
else console.log("No");