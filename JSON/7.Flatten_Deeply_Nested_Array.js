/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n==0) return arr;
    let result = [];
    for (let el of arr) {
        if (Array.isArray(el) && n > 0) {
            result.push(...flat(el, n - 1));
        } else {
            result.push(el);
        }
    }
    return result;
};

arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]
n = 0 // indicates the levels of array

console.log(flat(arr,n))