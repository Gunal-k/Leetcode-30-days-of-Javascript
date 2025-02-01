var createCounter = function(n) {
    // Initialize the counter variable to -1
    counter = -1;
    
    // Return a function that increments the counter and adds n to it
    return function() {
        // Increment the counter by 1 each time the function is called
        counter = counter + 1;
        
        // Return the sum of n and the current counter value
        return n + counter;
    };
};
