/**
 * 2. Список
 * Объекты могут быть использованы для построения различных структур данных. Часто встречающаяся структура – список (не путайте с массивом). 
 * Список – связанный набор объектов, где первый объект содержит ссылку на второй, второй – на третий, и т.п. (как раз в последней ссылке из полезного эта структура описана)
 * Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], а также функцию listToArray, которая создаёт массив из списка.
 * Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, 
 * и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке или же undefined в случае отсутствия такого элемента.
 * Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.
 */

function arrayToList(array) {
    let list = {};
    for (let i = array.length-1; i >= 0; i--) {
        list = prepend(array[i], list);
    }
    return list;
}

function listToArray(list) {
    let array = [];
    let ind = 0;
    while (nth(list, ind) != undefined) {
        array[ind] = (nth(list, ind++));
    }
    return array;
}

function prepend(elem, list) {
    return {
        value: elem,
        next: list
    };
}

function nth(list, position) {
    if (position == 0) {
        return list.value;
    }
    if (position < 0) {
        return undefined;
    }
    if (list.next == undefined) {
        return undefined;
    }
    return nth(list.next, --position);
}



// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// console.log(list);

// console.log(nth(list, -1));

// let list2 = prepend(8, list);
// console.log(list2);
let array = [1, 2, 3];
let list = arrayToList(array);
console.log(list);

let array2 = listToArray({});
console.log(array2);