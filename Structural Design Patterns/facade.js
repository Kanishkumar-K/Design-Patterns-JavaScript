
class Grinder {
    grind() {
        console.log("Grinding coffee beans.");
    }
}

class WaterHeater {
    heatWater() {
        console.log("Heating water to the perfect temperature.");
    }
}

class Brewer {
    brew() {
        console.log("Brewing the coffee.");
    }
}

class CoffeeMachineFacade {
    constructor() {
        this.grinder = new Grinder();
        this.waterHeater = new WaterHeater();
        this.brewer = new Brewer();
    }

    makeCoffee() {
        console.log("Starting coffee preparation...");
        this.grinder.grind();
        this.waterHeater.heatWater();
        this.brewer.brew();
        console.log("Coffee is ready!");
    }
}

const coffeeMachine = new CoffeeMachineFacade();
coffeeMachine.makeCoffee();
