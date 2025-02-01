var createHelloWorld = function() {
    // Return a function that always returns "Hello World"
    return function(...args) {
        // Ignore the arguments and just return "Hello World"
        return "Hello World";
    };
};

// Create a new function by calling createHelloWorld()
var helloWorld = createHelloWorld();

// Call the function and log the result to the console
console.log(helloWorld()); // Output: Hello World
