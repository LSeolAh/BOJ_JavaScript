const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let [N,X] = (input[0].split(" ").map((el) => +(el)));

let arr = input[1].split(" ").map((el) => +(el));

console.log(arr.filter(answer => answer < X).join(" "));