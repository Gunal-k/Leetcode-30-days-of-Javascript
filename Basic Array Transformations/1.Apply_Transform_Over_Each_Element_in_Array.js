var map = function (arr, fn) {
    const a = []
    for (let i = 0; i < arr.length; i++) {
         a.push(fn(arr[i], i))
     }
     return a
 };