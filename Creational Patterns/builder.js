class Pizza{
    constructor(){
        this.crust = ''
        this.sauce = ''
        this.topping =[]
    }

    describe(){
        return `A ${this.crust} crust pizza with ${this.sauce} sauce and toppings: ${this.topping.join(', ')}`;
    }
}

class PizzaBuilder{
    constructor(){
        this.pizza = new Pizza()
    }

    setcrust(crust){
        this.pizza.crust = crust;
        return this
    }

    setsauce(sauce){
        this.pizza.sauce = sauce;
        return this
    }

    settopping(topping){
        this.pizza.topping.push(topping);
        return this;
    }

    build(){
        return this.pizza
    }
}

builder= new PizzaBuilder();
pizza = builder
.setcrust('medium')
.setsauce('chilli')
.settopping('olive , tomato')
.build()

console.log(pizza.describe())

