const file = 
process.platform === "linux" ? 0 : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split(" ");

let H = Number(input[0]);
console.log(H);
let M = Number(input[1]);
console.log(M);
let min = Number(input[2]);
console.log(min);

if((M+min)<=59)
			console.log(H+" "+(M+min));
		else {
			let a = parseInt((min+M)/60);
			let b = ((min+M)%60);
			let c = (H+a);
			if((H+a)>=24) c = ((H+a)-24);
			console.log((c)+" "+b);
		}