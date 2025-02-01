var expect = function(val) {
    // Return an object with methods to compare values
    return {
        // toBe checks if val is equal to val2
        toBe: (val2) => {
            if (val !== val2) {
                // Throw an error if values are not equal
                throw new Error("Not Equal");
            } else {
                // Return true if values are equal
                return true;
            }
        },
        
        // notToBe checks if val is NOT equal to val2
        notToBe: (val2) => {
            if (val === val2) {
                // Throw an error if values are equal
                throw new Error("Equal");
            } else {
                // Return true if values are not equal
                return true;
            }
        }
    };
};
