var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

var helloWorld = createHelloWorld();
console.log(helloWorld()); // Output: Hello World