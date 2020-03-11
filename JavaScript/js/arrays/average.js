/**
 * Найти в массиве те элементы, значение которых меньше среднего арифметического, взятого от всех элементов массива.
 */

let array = [];
let mlen = Math.floor(Math.random() * 11) + 2; //2 ... 10
for (let i = 0; i < mlen; i++) {
    array[i] = Math.floor(Math.random() * 101);
}
console.log(array);

let average = 0;
for (let i = 0; i < mlen; i++) {
    average += array[i];
}
average /= mlen;
console.log(average);

let elements = [];
for (let i = 0; i < mlen; i++) {
    if(array[i] < average) {
        elements.push(array[i]);
    }
}
console.log(elements);