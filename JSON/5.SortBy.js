/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b)=> fn(a)-fn(b))
};

fn = (x)=>x;
arr = [5,4,3,2,1]
console.log(sortBy(arr,fn)) // [ 1, 2, 3, 4, 5 ]