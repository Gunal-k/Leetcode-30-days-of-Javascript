/**
 * Filters elements from an array based on a provided function.
 *
 * @param {Array} arr - The array to filter.
 * @param {Function} fn - The function used to test each element. It receives the current element and its index as arguments.
 * @returns {Array} - A new array with the elements that pass the test implemented by the provided function.
 */
var filter = function(arr, fn) {
    const a = []; // Initialize an empty array to store the filtered elements
    arr.forEach((ar, i) => { // Iterate over each element in the array
        if(fn(ar, i)){ // If the element passes the test function
            a.push(arr[i]); // Add the element to the new array
        }
    });
    return a; // Return the new array with the filtered elements
};