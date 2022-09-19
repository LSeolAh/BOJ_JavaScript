const file =
process.platform === "linux" ? 0 : "./input.txt";

//배열은 string으로 들어가기 때문에 숫자로 변환
const input = Number(require("fs").readFileSync(file).toString().trim());

let num = input;
let sum;
let i = 0;

while (true) {
    //(num / 10)은 소숫점이 나오기 때문에 int형으로 변환
    sum = parseInt(num / 10) + (num % 10);
    num = (num % 10) * 10 + (sum % 10);
    i++;
    console.log(input);
    if (input === num) break;
  }

  console.log(i);