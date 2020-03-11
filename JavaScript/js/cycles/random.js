/**
 * Проверить корректность работы генератора псевдослучайных чисел языка программирования с помощью оценки вероятности выпадения четных чисел на выборке не меньше 1000 случайных чисел.
 * (Программа должна выдать около 50%. Можно увеличить число генераций, например, до 10 тысяч. В таком случае отклонение от 50% будет меньше.)
 */

let iterNum = 1000;

let evenNum = 0;
for (let i = 0; i < iterNum; i++) {
    let randNum = Math.floor(Math.random() * 100);
    console.log(randNum);
    if (!Math.floor(randNum % 2)) {
        evenNum++;
    }
}
console.log("evenNum =", evenNum);

let percentage = evenNum*100/iterNum;
console.log("percentage =", percentage);