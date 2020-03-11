// Вывести уравнение прямой по координатам двух точек

// // Каноническое уравнение прямой, проходящей через две точки:
// // (x - x1)/(x2 - x1) = (y - y1)/(y2 - y1)

let x1 = Math.floor(Math.random() * 11) - 10;
let y1 = Math.floor(Math.random() * 11) - 10;
let x2 = Math.floor(Math.random() * 11) - 10;
let y2 = Math.floor(Math.random() * 11) - 10;
console.log("x1 =", x1, "x2 =", x2, "y1 =", y1, "y2 =", y2);

//Для начала получаем координаты ветора:
let mx = x2 - x1;
let my = y2 - y1;
console.log("mx =", mx, "my =", my);

//а потом вжух:
// (x - x1)/mx = (y - y1)/my
// или: my/mx*(x - x1) + y1 = y
if (mx == 0) {
    console.log("mx == 0!");
} else {
    console.log(+my/mx + "x -" + (x1*my/mx+y1) + " = y");
}
