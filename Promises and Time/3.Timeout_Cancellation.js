/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let timer = setTimeout(()=>{fn(...args)},t)

    return function cancelFn(){
        clearTimeout(timer)
    }
};


const result = [];

const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;
const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)});
}

const cancel = cancellable(log, args, t);
const maxT = Math.max(t, cancelTimeMs);
setTimeout(cancel, cancelTimeMs);
setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15)



// Explanation:
// 1. setTimeout schedules the function fn to run after t milliseconds.
// 2. We store the timeout ID in timer.
// 3. Returning cancelFn:
// 4. When cancelFn() is called, clearTimeout(timer) cancels the execution.
// 5. If cancelFn is not called, fn executes after t milliseconds.
