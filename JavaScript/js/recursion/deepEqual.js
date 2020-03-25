/**
 * 3. Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты, 
 * свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.
 * Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, используйте оператор typeof. 
 * Если он выдаёт "object" для обеих величин, значит нужно делать глубокое сравнение. 
 * Примите во внимание одно дурацкое исключение, существующее по историческим причинам: typeof null тоже возвращает "object".
 */

function deepEqual(val1, val2) {
    let res = false;
    if (typeof(val1) != "object" && typeof(val2) != "object") {
        if (val1 === val2) {
            res = true;
        } else {
            res = false;
        }
    } else {
        if (typeof(val1) == "object" && typeof(val2) == "object") {
            if (val1 === null && val2 === null) {
                res = true;
            } else {
                if (val1 != null && val2 != null) {
                    for (let key in val1) {
                        res = deepEqual(val1[key], val2[key]);
                        if (res === false) {
                            return false;
                        }
                    }
                } else { //если одно из значений null, а другое - нет
                    res = false;
                }
            }
        } else { //если одно из значений объект, а другое - нет
            res = false;
        }
    }
    return res;
}

let obj1 = {
    v1: 2, 
    v2: true,
    v3: "qa"
};
let obj2 = {
    v1: 2, 
    v2: true,
    v3: "qa"
};
console.log(deepEqual(obj1, obj2));