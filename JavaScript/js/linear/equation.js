// Найти корни квадратного уравнения. (ax2 + bx + c)

let a = Math.floor(Math.random() * (100 + 100 + 1)) - 100;
let b = Math.floor(Math.random() * (100 + 100 + 1)) - 100;
let c = Math.floor(Math.random() * (100 + 100 + 1)) - 100;
console.log("a = ", a, "b = ", b, "c = ", c);

let X1, X2;
let D = b*b - 4*a*c;
if (D < 0) {
    console.log("D < 0");
} else {
    X1 = (-b + Math.sqrt(D))/(2*a);
    X2 = (-b - Math.sqrt(D))/(2*a);
    console.log("X1 =", X1, "X2 =", X2);
}
