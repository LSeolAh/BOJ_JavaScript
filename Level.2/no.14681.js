// const file =
// process.platform === "linux" ? "dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(file).toString().trim().split("\n");

// const A = Number(input[0]);
// const B = Number(input[1]);

// if((A > 0) && (B > 0)) console.log("1");
// else if((A < 0) && (B > 0)) console.log("2");
// else if((A < 0) && (B < 0)) console.log("3");
// else console.log("4");


// 런타임에러
// const file =
// process.platform === "linux" ? "dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(file).toString().trim().split("\n");

// const A = Number(input[0]);
// const B = Number(input[1]);

// if (A > 0) {
//     B > 0 ? console.log("1") : console.log("4");
//   } else if (A < 0) {
//     B > 0 ? console.log("2") : console.log("3");
//   }


//readFileSync에 file을 넣으면 런타임 에러가 나는 경우가 있음
//그럴 땐 file을 0으로 바꿔주거나 "dev/stdin"을 0으로 바꿔주기
const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);

if (A > 0) {
    B > 0 ? console.log("1") : console.log("4");
  } else if (A < 0) {
    B > 0 ? console.log("2") : console.log("3");
  }