class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    //add
    add() {
        return this.a + this.b;
    }

    //subtract
    subtract() {
        return this.a - this.b;
    }

    //divide
    divide() {
        return this.a / this.b;
    }

    //multiplu
    multiply() {
        return this.a * this.b;
    }
}

module.exports = Calculator;