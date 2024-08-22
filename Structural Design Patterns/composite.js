// Component
class TeamMember {
    constructor(name) {
      this.name = name;
    }
  
    display() {
      throw new Error("This method should be overridden");
    }
  }
  
  // Leaf
  class Employee extends TeamMember {
    display() {
      console.log(`Employee: ${this.name}`);
    }
  }
  
  // Composite
  class Team extends TeamMember {
    constructor(name) {
      super(name);
      this.members = [];
    }
  
    add(member) {
      this.members.push(member);
    }
  
    display() {
      console.log(`Team: ${this.name}`);
      this.members.forEach(member => member.display());
    }
  }
  
const alice = new Employee("Alice");
const bob = new Employee("Bob");

const developmentTeam = new Team("Development Team");
const designTeam = new Team("Design Team");

developmentTeam.add(alice);
designTeam.add(bob);

const company = new Team("Company");
company.add(developmentTeam);
company.add(designTeam);

company.display();
