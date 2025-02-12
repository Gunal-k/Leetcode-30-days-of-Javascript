/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res = []
    let temp = []
    for(let i =0;i<arr.length;i++){
        temp.push(arr[i])

        if(temp.length === size || i === arr.length - 1){
            res.push(temp)
            temp = []
        }
    }
    return res

};
