solveEquation(25, 6, -8);
findQuarter(3, -4);
mirrorNumber(4312);
findElements([2, -5, 8, 88, 16, -32]);

// Найти корни квадратного уравнения. (ax2 + bx + c)
function solveEquation(a: number, b: number, c: number) {
    console.log("===== solveEquation =====");
    console.log("a = ", a, "b = ", b, "c = ", c);

    let X1: number, X2: number, D: number;
    D = b*b - 4*a*c;
    
    if (D < 0) {
        console.log("D < 0");
    } else {
        X1 = (-b + Math.sqrt(D))/(2*a);
        X2 = (-b - Math.sqrt(D))/(2*a);
        console.log("X1 =", X1, "X2 =", X2);
    }
}

/**
 * Определить, какой четверти принадлежит точка с координатами (x, y).
 * x и y - рандом от -10 до 10
 */
function findQuarter(x: number, y: number) {
    console.log("===== findQuarter =====");
    console.log("x =", x, "y =", y);
    if (x == 0 && y == 0) {
        console.log("точка лежит в центре");
    } else {
        if(x > 0) {
            if(y > 0) {
                console.log("первая четверть");
            } else {
                console.log("четвертая четверть");
            }
        } else {
            if(y > 0) {
                console.log("вторая четверть");
            } else {
                console.log("третья четверть");
            }
        }
    }
}

/**
 * Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
 * Число к строке приводить нельзя - ищите другие пути)
 */
function mirrorNumber(number: number) {
    console.log("===== mirrorNumber =====");
    let n: number = number;
    let mirror: number = 0;
    while (n != 0) {
        let digit = Math.floor(n % 10);

        mirror *= 10;
        mirror += digit;

        n = Math.floor(n / 10);
    }
    console.log("number =", number, "mirror =", mirror);
}

/**
 * Найти в массиве те элементы, значение которых меньше среднего арифметического, взятого от всех элементов массива.
 */
function findElements(array: number[]) {
    console.log("===== findElements =====");
    let mlen: number = array.length;
    for (let i = 0; i < mlen; i++) {
        array[i] = Math.floor(Math.random() * 101);
    }
    console.log(array);

    let average = 0;
    for (let i = 0; i < mlen; i++) {
        average += array[i];
    }
    average /= mlen;
    console.log("average =", average);

    let elements = [];
    for (let i = 0; i < mlen; i++) {
        if(array[i] < average) {
            elements.push(array[i]);
        }
    }
    console.log("res =", elements);
}