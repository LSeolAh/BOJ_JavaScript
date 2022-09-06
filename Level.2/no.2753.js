//if문 두개로 풀기
const file = 
process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim();

const A = Number(input);

if (A % 4 === 0) {
    if((A % 100 !==0) || (A % 400 === 0))
        console.log("1");
    else
        console.log("0");
}
else
    console.log("0");

//if문 하나로 풀기
const f = 
process.platform === "linux" ? "dev/stdin" : "./input.txt";

const inp = require("fs").readFileSync(f).toString().trim();

const a = Number(inp);

if((a % 4 === 0) && (a % 100 !==0) || (a % 400 === 0))
    console.log("1");
else
    console.log("0");