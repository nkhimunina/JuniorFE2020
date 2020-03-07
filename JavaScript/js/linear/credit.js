/*
Рассчитать выплаты по кредиту:
Рассчитать месячные выплаты (m) и суммарную выплату (s) по кредиту.
О кредите известно, что он составляет n рублей, берется на y лет, под p процентов.

Месячные выплаты находятся по формуле:
m = (n * p * (1 + p)y) / (12 * ((1 + p)y – 1)), где p выражается в долях единицы, а не процентах.

Суммарная выплата представляет собой выплаты за все месяцы каждого года:
s = (m * 12) * y
*/

let n = 1000000;
let y = 5;
let p = 0.13;
console.log("n = ", n, "y = ", y, "p = ", p);

m = (n * p * (1 + p) * y) / (12 * ((1 + p) * y - 1));
s = (m * 12) * y;
console.log("m = ", m,  "s = ", s);