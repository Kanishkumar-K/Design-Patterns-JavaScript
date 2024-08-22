class WhatsappGroup {
    constructor() {
    this.observers = [];
    }

    addMember(observer) {
    this.observers.push(observer);
    }

    notifyObservers(message) {
    this.observers.forEach(observer => observer.update(message));
    }
}

class Observer {
    constructor(name){
    this.name = name
    }
    
    update() {
    console.log(`Welcome to group ${this.name}`);
    }
}

const group = new WhatsappGroup();
const member1 = new Observer('Kanish');
const member2 = new Observer('Kumar');

group.addMember(member1);
group.addMember(member2);

group.notifyObservers('Hello Observers!');