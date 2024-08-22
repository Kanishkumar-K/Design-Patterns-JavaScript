class Mediator {
    send(message, sender) {
        if (sender === 'A') {
        console.log(`Mediator received message from A: ${message}`);
        console.log('Mediator forwards message to B');
        } else if (sender === 'B') {
        console.log(`Mediator received message from B: ${message}`);
        console.log('Mediator forwards message to A');
        }
    }
    }

    class ColleagueA {
    constructor(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        console.log(`A sends: ${message}`);
        this.mediator.send(message, 'A');
    }
    }

    class ColleagueB {
    constructor(mediator) {
        this.mediator = mediator;
    }

    send(message) {
        console.log(`B sends: ${message}`);
        this.mediator.send(message, 'B');
    }
    }

    const mediator = new Mediator();

    const colleagueA = new ColleagueA(mediator);
    const colleagueB = new ColleagueB(mediator);

    colleagueA.send('Hello from A');
    colleagueB.send('Hello from B');