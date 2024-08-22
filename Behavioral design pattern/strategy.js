
  class MenuStrategy {
    choose() {
      throw new Error("Method 'choose()' must be implemented.");
    }
  }
  
  class VegetarianMenuStrategy extends MenuStrategy {
    choose() {
      return ["Vegetarian Pizza", "Paneer Curry", "Veg Burger"];
    }
  }
  
  class NonVegMenuStrategy extends MenuStrategy {
    choose() {
      return ["Mutton Biriyani", " Chicken 65", "Fish Fry"];
    }
  }

  class MenuChooser {
    constructor(menuStrategy) {
      this.menuStrategy = menuStrategy;
    }
  
    setMenuStrategy(menuStrategy) {
      this.menuStrategy = menuStrategy;
    }
  
    chooseMenu() {
      return this.menuStrategy.choose();
    }
  }
  
  const menuChooser = new MenuChooser(new NonVegMenuStrategy());

  console.log(menuChooser.chooseMenu()); 
  