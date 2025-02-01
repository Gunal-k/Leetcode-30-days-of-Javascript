var createCounter = function(init) {
    // Initialize the counter with the given initial value
    let value = init;     // Store the initial value for resetting
    let current = init;   // Track the current value of the counter
    
    return {
        // Increment the counter by 1 and return the new value
        increment() {
            return ++current;
        },
        
        // Reset the counter to the initial value and return it
        reset() {
            current = value;  // Set current value back to the initial value
            return current;
        },
        
        // Decrement the counter by 1 and return the new value
        decrement() {
            return --current;
        }
    };
};
