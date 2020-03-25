/**
 * 1. Рекурсия
 * Мы видели, что оператор % (остаток от деления) может использоваться для определения того, чётное ли число (% 2). 
 * А вот ещё один способ определения:
 * Ноль чётный.
 * Единица нечётная.
 * У любого числа N чётность такая же, как у N - 2.
 * Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение.
 * Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?
 * console.log(isEven(50));
 * // → true
 * console.log(isEven(75));
 * // → false
 * console.log(isEven(-1));
 * // → ??
 */

function evenResursion(number) {
    if (number == 0) {
        console.log("even");
        return;
    }
    if (number == 1) {
        console.log("odd");
        return;
    }
    if (number < 0) {
        return evenResursion(number + 2);
    }
    return evenResursion(number - 2);
}

// evenResursion(6);

// evenResursion(7);

// evenResursion(2);

// evenResursion(0);

// evenResursion(1);

evenResursion(-1);