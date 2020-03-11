/**
 * Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2.
 * Если в массиве кол-во элеметнов нечётное (1 2 3 4 5), "средний" элемент оставить на своем месте: 4 5 3 1 2
 */

let array = [];
let mlen = Math.floor(Math.random() * 11) + 2; //2 ... 10
for (let i = 0; i < mlen; i++) {
    array[i] = Math.floor(Math.random() * 101);
}
console.log(array);

let newArray = array;
let halfLen = Math.floor(array.length / 2);
console.log(halfLen);
if (!Math.floor(array.length % 2)) { // если четное число элементов
    for (let i = 0; i < halfLen; i++) {
        let tmp = newArray[i];
        newArray[i] = newArray[halfLen + i];
        newArray[halfLen + i] = tmp;
    }
} else { //если нечетное
    for (let i = 0; i < halfLen; i++) {
        let tmp = newArray[i];
        newArray[i] = newArray[halfLen + 1 + i];
        newArray[halfLen + 1 + i] = tmp;
    }
}
console.log(newArray);