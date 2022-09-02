const file = 
process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(file).toString().trim().split(" ");

const K = 1; Q = 1; R = 2; B = 2; KN = 2; P = 8;

const k = Number(input[0]);
const q = Number(input[1]);
const r = Number(input[2]);
const b = Number(input[3]);
const kn = Number(input[4]);
const p = Number(input[5]);

console.log((K - k) + " " + (Q - q) + " " + (R - r) + " " + (B - b) + " " + (KN - kn) + " " + (P - p) + " ");
