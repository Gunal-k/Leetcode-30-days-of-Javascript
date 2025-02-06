/*
 * @param {Function[]} functions
 * @return {Function}
*/
var compose = function(functions) {
    return x => functions.reduceRight((acc, fn) => fn(acc), x);
};
//reduceRight() works like reduce(), but it processes elements from right to left instead of left to right.

//array.reduceRight((acc, current) => {/* logic */}, initialValue);
//[1, 2, 3, 4].reduceRight((acc, num) => acc + num, 0);  
// Computes: (((0 + 4) + 3) + 2) + 1) → 10
