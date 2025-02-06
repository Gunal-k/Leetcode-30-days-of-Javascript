/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

//args.length is a inbuild function which returns length og array

console.log(argumentsLength(5,4,5,6)) // 4