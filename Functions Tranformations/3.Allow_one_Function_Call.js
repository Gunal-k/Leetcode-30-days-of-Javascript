var once = function(fn) {
    let called = 0
    return function(...args){
        if(called == 0){
            called++;
            return fn(...args)
        }
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
 
onceFn(1,2,3); 
onceFn(2,3,6); 