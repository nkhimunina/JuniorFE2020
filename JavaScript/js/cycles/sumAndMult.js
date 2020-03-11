/**
 * Найти сумму и произведение цифр введенного натурального числа.
 * Число - рандом от 100 000 до 1 000 000.
 */

let max_n = 1000000;
let min_n = 100000;
let number = Math.floor(Math.random() * (max_n - min_n + 1)) + min_n;

let n = number;
let digitSum = 0, digitMult = 1;
while (n != 0) {
    let digit = Math.floor(n % 10);

    digitSum += digit;
    digitMult *= digit;

    n = Math.floor(n / 10);
    console.log("digit =", digit, "n =", n);
}

console.log("number =", number, "digitSum =", digitSum, "digitMult =", digitMult);