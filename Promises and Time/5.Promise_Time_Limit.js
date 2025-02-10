/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
// var timeLimit = function(fn, t) {
//     return async function(...args) {
//         return new Promise((resolve, reject) => {
//             const timer = setTimeout(() => {
//                 reject("Time Limit Exceeded");
//             }, t);

//             fn(...args)
//                 .then((result) => {
//                     clearTimeout(timer);
//                     resolve(result);
//                 })
//                 .catch((error) => {
//                     clearTimeout(timer); // Clear the timeout if fn rejects
//                     reject(error);
//                 });
//         });
//     };
// };

var timeLimit = function(fn, t) {
	return async function(...args) {
        const originalFnPromise = fn(...args);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        })

        return Promise.race([originalFnPromise, timeoutPromise]);
    }
};

let fn = async(n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
  }
let inputs = [5]
let t = 100
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result)
