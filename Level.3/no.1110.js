const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = Number(require("fs").readFileSync(file).toString().trim());

let num = input;
let sum;
let i = 0;

while (true) {
    sum = parseInt(num / 10) + (num % 10);
    num = (num % 10) * 10 + (sum % 10);
    i++;
    console.log(input);
    if (input === num) break;
  }

  console.log(i);