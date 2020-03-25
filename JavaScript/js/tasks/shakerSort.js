/**
 * Шейкерная сортировка
 */

// let arr = [1, 45, -24, 0, 22, 87, 6, 66, 3, 14];
// let arr = [1, 45, -24, 0, 22, 87, 6, 66, 3];
let mlen = Math.floor(Math.random()*11) + 2;
let arr = [];
for (let i = 0; i < mlen; i++) {
    arr[i] = Math.floor(Math.random() * 201) - 100;
}
console.log(arr);

function shakerSortForward(arr, len) {
    for (let i = 0; i < len-1; i++) {
        if (arr[i] > arr[i+1]) {
            let tmp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = tmp;
        }
    }
}

function shakerSortBackward(arr, len) {
    for (let i = len-1; i > 0; i--) {
        if (arr[i] > arr[i-1]) {
            let tmp = arr[i-1];
            arr[i-1] = arr[i];
            arr[i] = tmp;
        }
    }
}

function shakerSort(arr, len, ind) {
    let halfLen = Math.floor(len/2);

    if (len == 1) {
        return;
    }

    shakerSortForward(arr, len--, ind);
    shakerSortBackward(arr, len, ind++);

    shakerSort(arr, len, ind);
}

shakerSort(arr, arr.length, 0);
console.log(arr);