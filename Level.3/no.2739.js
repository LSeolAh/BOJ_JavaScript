const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split(" ");

let num = Number(input[0]);

for (let i=1; i<=9; i++) console.log(num + " * " + i + " = " + i*num);