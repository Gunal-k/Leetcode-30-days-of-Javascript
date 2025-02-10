var TimeLimitedCache = function() {
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const isExist = this.cache.has(key) && this.cache.get(key).expires > Date.now();

    this.cache.set(key,{
        value,
        expires: Date.now()+duration
    });
    setTimeout(()=>{
        if (this.cache.has(key) && this.cache.get(key).expires <= Date.now()) {
                this.cache.delete(key);
            }
    },duration)

    return isExist
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cache.get(key)){
        const val = this.cache.get(key)
        if(val.expires > Date.now()){
            return val.value
        }
        else{
            this.cache.delete(key)
        }
    }
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0
    const date = Date.now()
    for(const [key,entry] of this.cache){
        if(entry.expires > date){
            count++;
        }
        else{
            this.cache.delete(key)
        }
    }
    return count
};


const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1
