class Expression {
    interpret() {
        throw new Error("This method should be overridden.");
    }
    }

    class NumberExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    interpret() {
        return this.value;
    }
    }

    class AddExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
    }

    const expression = new AddExpression(new NumberExpression(2), new NumberExpression(3));

    const result = expression.interpret();
    console.log(result); // Output: 5