var compactObject = function(obj) {
    if(Array.isArray(obj)){
        return obj.map(compactObject).filter(Boolean);
    }
    else if(typeof obj === 'object' && obj !== null){
         return Object.fromEntries(
            Object.entries(obj)
                .map(([key, value]) => [key, compactObject(value)])
                .filter(([_, value]) => Boolean(value))
        );
    }
    else {
        return obj
    }
};

let obj = [null, 0, false, 1]
console.log(compactObject(obj)) // [1]