/**
 * Сортировка выбором
 */

let arr = [1, 45, -24, 0, 22, 87, 6, 66, 3, 14];
console.log(arr);

let ind = 0;
let maxInd = arr.length;
for (let i = 0; i < maxInd; i++) {
    if (arr[i] > arr[ind]) {
        ind = i;
    }
    if (i == maxInd-1) {
        let tmp = arr[i];
        arr[i] = arr[ind];
        arr[ind] = tmp;
        ind = 0;
        i = 0;
        maxInd--;
    }
}
console.log(arr);