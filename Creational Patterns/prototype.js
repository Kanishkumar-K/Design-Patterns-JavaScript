class Prototype {
    constructor(name) {
      this.name = name;
    }
  
    clone() {
      return Object.create(this);
    }
  }
  
  const original = new Prototype("Original");
    const cloned = original.clone();
    
    console.log(cloned.name); 
    
    cloned.name = "Cloned";
  
  console.log(original.name); 
  console.log(cloned.name);  
