/**
 * Определить, какой четверти принадлежит точка с координатами (x, y).
 * x и y - рандом от -10 до 10
 */

let _x = Math.floor(Math.random()*11) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
let _y = Math.floor(Math.random()*11) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
console.log("_x = ", _x, "_y = ", _y);

if(_x > 0) {
    if(_y > 0) {
        console.log("первая четверть");
    } else {
        console.log("четвертая четверть");
    }
} else {
    if(_y > 0) {
        console.log("вторая четверть");
    } else {
        console.log("третья четверть");
    }
}