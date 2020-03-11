/**
 * Угадать случайное число.
 * В программе генерируется случайное целое число от 0 до 100.
 * Пользователь должен его отгадать не более чем за 10 попыток.
 * После каждой неудачной попытки должно сообщаться больше или меньше введенное пользователем число, чем то, что загадано.
 * Если за 10 попыток число не отгадано, то вывести загаданное число.
 */

let secretNumber = Math.floor(Math.random() * 101); //0 ... 100
const maxTry = 10;

for (let i = 1; i <= maxTry; i++) {
    let tryNum = +prompt("Введите число 0...100: ");
    console.log(i, tryNum);
    if (tryNum > secretNumber) {
        alert("Больше");
    }
    if (tryNum < secretNumber) {
        alert("Меньше");
    }
    if (tryNum == secretNumber) {
        alert("ПОБЕДА! Поздравляем, Вы угадали число!");
        console.log("Загаданное число:", secretNumber);
        break;
    }
    if (i == maxTry) {
        alert("GAME OVER");
        console.log("Загаданное число:", secretNumber);
    }
}