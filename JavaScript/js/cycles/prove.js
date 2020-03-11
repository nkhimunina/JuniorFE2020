/**
 * Докажите, что для множества натуральных чисел верно 1+2+...+n = n*(n+1)/2
 */

let n = Math.floor(Math.random() * 100) + 1;
console.log("n =", n);

let res1 = n * (n + 1) / 2;

let res2 = 0;
for (let i = 1; i <= n; i++) {
    res2 += i;
}

console.log("1+2+...+n =", res1, "n*(n+1)/2 =", res2);
if (res1 == res2) {
    console.log("1+2+...+n = n*(n+1)/2, TRUE");
} else {
    console.log("1+2+...+n != n*(n+1)/2, FALSE");
}