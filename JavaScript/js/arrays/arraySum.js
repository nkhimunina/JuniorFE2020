/**
 * В массиве найти сумму элементов, находящихся между минимальным и максимальным элементами.
 * Сами минимальный и максимальный элементы в сумму не включать.
 */

let array = [];
let mlen = Math.floor(Math.random() * 11) + 2; //2 ... 10
for (let i = 0; i < mlen; i++) {
    array[i] = Math.floor(Math.random() * 101);
}
console.log(array);

let min = 0;
for (let i = 0; i < mlen; i++) {
    if (array[min] >= array[i]) {
        min = i;
    }
}
let max = 0;
for (let i = 0; i < mlen; i++) {
    if (array[max] <= array[i]) {
        max = i;
    }
}
console.log("min =", min, "max =", max);

if (max < min) {
    let tmp = min;
    min = max;
    max = tmp;
}

let arraySum = 0;
for (let i = min+1; i < max; i++) {
    arraySum = arraySum + array[i];
}
console.log("arraySum =", arraySum);