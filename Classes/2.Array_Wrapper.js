var ArrayWrapper = function(nums) {
    this.nums = nums
};

ArrayWrapper.prototype.valueOf = function() {
return this.nums.reduce((sum,num)=>num+sum, 0)
}

ArrayWrapper.prototype.toString = function() {
return `[${this.nums.join(",")}]`;
}


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"