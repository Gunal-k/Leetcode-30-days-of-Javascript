class Calculator {

    constructor(value) {
        this.curr = value
    }

    add(value){
        this.curr +=value;
        return this;
    }

    subtract(value){
        this.curr -=value;
        return this;
    }

    multiply(value) {
        this.curr *=value;
        return this;
    }

    divide(value) {
        if(value === 0){
            throw("Division by zero is not allowed");
        }
        this.curr /=value;
        return this;
    }
    
    power(value) {
        this.curr = Math.pow(this.curr,value);
        return this;
    }
    
    getResult() {
        return this.curr;
    }
}

const calculator = new Calculator(2);
calculator.add(5);
console.log(calculator.getResult()); 