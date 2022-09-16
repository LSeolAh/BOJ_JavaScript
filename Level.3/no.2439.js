//간단하게 생각하면 됐음
// 저번에 * 찍는 걸 응용해서 for문으로 공백 먼저 찍어내고
// 그 후에 for문으로 * 찍은걸 변수에 저장해서 냈으면 된거임
const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim();

let count = Number(input);
let star = "*";
let answer = "";
let space = " ";

for(let i=1;i<=count;i++){
    for(k=input-i; k>=1; k--)
        answer += space;
    for(let j=1;j<=i;j++)
        answer += star
    console.log(answer);
    answer = "";
}