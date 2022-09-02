const file = 
process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim();

const A = Number(input);

console.log(input - 543);