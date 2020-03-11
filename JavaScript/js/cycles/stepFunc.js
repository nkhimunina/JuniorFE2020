/**
 * Вывести таблицу значений функции y = -0.23*X2 + X.
 * Значения аргумента x задаются минимумом, максимумом и шагом.
 */

let x_min = Math.floor(Math.random() * (100 + 100 + 1)) - 100; 
let x_max = Math.floor(Math.random() * (100 + 100 + 1)) - 100; 
let x_step = Math.floor(Math.random() * 10) + 1; //чтобы больше 0

console.log("x_min =", x_min, "x_max =", x_max, "x_step =", x_step);

if (x_max < x_min) {
    console.log("ERROR: x_max < x_min!");
} else {
    let i_max = (x_max - x_min) / x_step;

    let x1 = x_min, x2 = x_min, y;
    console.log("|   x1   |   x2   |   y = -0.23*x2 + x1   |")
    for (let i = 0; i < i_max; i++) {
        x1 = x2;
        x2 += x_step;
        y = -0.23*x2 + x1;
        console.log("|  ", x1, "   |  ", x2, "   |  ", y, "   |");
    }
}