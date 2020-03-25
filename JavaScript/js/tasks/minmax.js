/**
 * Найти 2 наименьших элемента массива
 */

let arr = [1, 45, -24, 0, 22, 87, 6, 66, 3, 14];
console.log(arr);

let min = 0, max = 0;
for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log("min =", min, "max =", max);