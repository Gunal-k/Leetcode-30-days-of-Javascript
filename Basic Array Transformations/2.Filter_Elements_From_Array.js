var filter = function(arr, fn) {
    const a = []
    arr.forEach((ar,i) => {
        if(fn(ar, i)){
            a.push(arr[i])
        }
    })
    return a
};