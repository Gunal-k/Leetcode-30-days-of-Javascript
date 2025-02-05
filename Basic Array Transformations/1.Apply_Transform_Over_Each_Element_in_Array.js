/**
 * Applies a transformation function to each element in an array.
 *
 * @param {Array} arr - The array to transform.
 * @param {Function} fn - The transformation function to apply. It receives the current element and its index as arguments.
 * @returns {Array} A new array with each element transformed by the provided function.
 */
var map = function (arr, fn) {
    const a = [] //
    for (let i = 0; i < arr.length; i++) {
         a.push(fn(arr[i], i))
     }
     return a
 };