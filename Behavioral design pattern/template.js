class Beverage {
    prepare() {
        this.boilWater();
        this.addMainIngredient();
        this.pourInCup();
    }

    boilWater() {
        console.log("Boiling water...");
    }

    addMainIngredient() {
        throw new Error("addMainIngredient() must be implemented");
    }

    pourInCup() {
        console.log("Pouring into cup...");
    }
    }

    class Tea extends Beverage {
    addMainIngredient() {
        console.log("Adding tea leaves...");
    }
    }

    class Coffee extends Beverage {
    addMainIngredient() {
        console.log("Adding coffee grounds...");
    }
    }

    const tea = new Tea();
    tea.prepare();

    const coffee = new Coffee();
    coffee.prepare();


