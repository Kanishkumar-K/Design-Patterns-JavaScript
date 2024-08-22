class Memento {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }
    }

    class Originator {
    constructor() {
        this.state = '';
    }

    setState(state) {
        this.state = state;
        console.log(`State set to: ${this.state}`);
    }

    getState() {
        return this.state;
    }

    createMemento() {
        return new Memento(this.state);
    }

    restoreMemento(memento) {
        this.state = memento.getState();
        console.log(`State restored to: ${this.state}`);
    }
    }

    class Caretaker {
    constructor() {
        this.mementos = [];
    }

    saveMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
        return this.mementos[index];
    }
    }

    const originator = new Originator();
    const caretaker = new Caretaker();

    originator.setState('State 1');
    caretaker.saveMemento(originator.createMemento());

    originator.setState('State 2');
    caretaker.saveMemento(originator.createMemento());

    originator.setState('State 3');
    originator.restoreMemento(caretaker.getMemento(0)); 