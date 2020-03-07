/**
 * Вводятся два целых числа. 
 * Проверить, делится ли первое на второе. 
 * Вывести на экран сообщение об этом, а также остаток (если он есть) и частное (в любом случае). 
 * (рандом от -100 до 100)
 */

let first = Math.floor(Math.random()*101) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
let second = Math.floor(Math.random()*101) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
console.log(first, second);

if(first%second) {
    console.log("не делится: ", "first/second = ", first/second, "first%second = ", first%second);
} else {
    console.log("делится: ", "first/second = ", first/second);
}