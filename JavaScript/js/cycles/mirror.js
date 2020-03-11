/**
 * Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
 * Число к строке приводить нельзя - ищите другие пути)
 */

let max_n = 1000;
let min_n = 100;
let number = Math.floor(Math.random() * (max_n - min_n + 1)) + min_n;

let n = number;
let mirror = 0;
while (n != 0) {
    let digit = Math.floor(n % 10);

    mirror *= 10;
    mirror += digit;

    n = Math.floor(n / 10);
}
console.log("number =", number, "mirror =", mirror);