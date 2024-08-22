class Pizza {
    cost() {
        return 10; 
    }

    description() {
        return "Pizza";
    }
}

class PizzaDecorator {
    constructor(pizza) {
        this.pizza = pizza;
    }

    cost() {
        return this.pizza.cost();
    }

    description() {
        return this.pizza.description();
    }
}

class CheeseDecorator extends PizzaDecorator {
    cost() {
        return super.cost() + 2; 
    }

    description() {
        return super.description() + ", Cheese";
    }
}

class PepperoniDecorator extends PizzaDecorator {
    cost() {
        return super.cost() + 3; 
    }

    description() {
        return super.description() + ", Pepperoni";
    }
}

let myPizza = new Pizza();

myPizza = new CheeseDecorator(myPizza);
myPizza = new PepperoniDecorator(myPizza);
console.log(myPizza.description()); 
console.log(`Cost: $${myPizza.cost()}`); 
