const file = 
process.platform === "linux" ? "dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim();

const A = Number(input);


if (A >= 90)
    console.log("A");
else if (A >= 80)
    console.log("B");
else if (A >= 70)
    console.log("C");
else if (A >= 60)
    console.log("D");
else
    console.log("F");