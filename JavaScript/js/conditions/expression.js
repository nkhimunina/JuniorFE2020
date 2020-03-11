/**
 * Посчитать выражение (max(a*b*c, a+b+c) + 3). a, b и c - рандом от -10 до 10
 */

let A = Math.floor(Math.random()*11) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
let B = Math.floor(Math.random()*11) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
let C = Math.floor(Math.random()*11) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);

let mult = A*B*C;
let sum = A+B+C;
console.log("A*B*C =", mult, "A+B+C =", sum);
if (mult >= sum) {
    console.log("res =", mult+3);
} else {
    console.log("res =", sum+3);
}
