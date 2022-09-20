const file =
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

let num = input[0];
let n = num -1;
let array = input[1].split(" ");

//그냥 정렬하면 유니코드 순으로 옴
array.sort(function compare(a,b) {
    //retrun value > 0이므로 a는 b 뒤에 옴
    if(a > b) return 1;
    //return value < 0 이므로 a는 b 앞에 옴
    if(a < b) return -1;
    //a와 b의 정렬 유지
    return 0;
});
//코드 줄이기
// array.sort(function compare(a,b) {
//     return a-b;
// });

console.log(array[0], array[n]);