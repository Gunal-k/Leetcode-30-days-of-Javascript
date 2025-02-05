/**
 * @param {number[]} nums - The array of numbers to be reduced.
 * @param {Function} fn - The reducer function that takes two arguments and returns a single value.
 * @param {number} init - The initial value to start the reduction.
 * @return {number} - The final reduced value.
 */
var reduce = function(nums, fn, init) {
    let sum = init; // Initialize the sum with the initial value.
    for(let i = 0; i < nums.length; i++) { // Iterate through each element in the array.
        sum = fn(sum, nums[i]); // Apply the reducer function to the current sum and the current element.
    }
    return sum; // Return the final reduced value.
};