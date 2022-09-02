const file = 
process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim();

const A = (input);

console.log(input + "??!");