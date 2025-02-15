/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = new Map()

    arr1.forEach(obj => map.set(obj.id, { ...obj }));
    
    arr2.forEach(obj => {
        if (map.has(obj.id)) {
            Object.assign(map.get(obj.id), obj);
        } else {
            map.set(obj.id, { ...obj });
        }
    });

    return Array.from(map.values()).sort((a,b)=> a.id - b.id)

};

arr1 = [{"id": 1,"x": 1},{"id": 2,"x": 9}]
arr2 = [{"id": 3,"x": 5}]
console.log(join(arr1,arr2)) // [{"id":1,"x":1},{"id":2,"x":9},{"id":3,"x":5}]