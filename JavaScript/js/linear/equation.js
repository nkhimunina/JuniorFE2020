// Найти корни квадратного уравнения. (ax2 + bx + c)

let a = 5;
let b = 10;
let c = 2;

let D = b*b - 4*a*c;

let X1 = (-b + Math.sqrt(D))/(2*a);
let X2 = (-b - Math.sqrt(D))/(2*a);

console.log("a = ", a, "b = ", b, "c = ", c);
console.log("X1 = ", X1, "X2 = ", X2);