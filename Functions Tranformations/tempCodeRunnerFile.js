var once = function(fn) {
    let called = 0
    return function(...args){
        if(called == 0){
            called++;
            return fn(...args)
        }
    }
};
