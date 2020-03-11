/**
 * Сделать реверс массива (массив в обратном направлении)
 */

let array = [];
let mlen = 10;

for (let i = 0; i < mlen; i++) {
    array[i] = Math.floor(Math.random() * 101);
}
console.log(array);

let newArray = [];
for (let i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
}
console.log(newArray);