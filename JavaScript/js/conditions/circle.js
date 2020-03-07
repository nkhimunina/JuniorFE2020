/**
 * Определение принадлежности точки кругу с центром в начале координат: 
 * вводятся координаты (x;y) точки и радиус круга (r), определить, принадлежит ли данная точка кругу, если его центр находится в начале координат. 
 * x и y - рандом от -15 до 15, r - рандом от -10 до 10
 */

let xxx = Math.floor(Math.random()*16) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
let yyy = Math.floor(Math.random()*16) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
let rrr = Math.floor(Math.random()*11) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
console.log("x = ", xxx, "y = ", yyy, "r = ", rrr);

if(xxx*xxx+yyy*yyy <= rrr*rrr) {
    console.log("точка принадлежит окружности");
} else {
    console.log("точка не принадлежит окружности");
}