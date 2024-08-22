class Handler {
    constructor(nextHandler = null) {
        this.nextHandler = nextHandler;
    }

    handle(request) {
        if (this.nextHandler) {
        this.nextHandler.handle(request);
        }
        else{
            console.log("None can handle")
        }
    }
    }

    class HandlerA extends Handler {
    handle(request) {
        if (request === 'A') {
        console.log('HandlerA handled request A');
        } else {
        super.handle(request);
        }
    }
    }

    class HandlerB extends Handler {
    handle(request) {
        if (request === 'B') {
        console.log('HandlerB handled request B');
        } else {
        super.handle(request);
        }
    }
    }

    const handlerB = new HandlerB();
    const handlerA = new HandlerA(handlerB);

    handlerA.handle('A'); // HandlerA handled request A
    handlerA.handle('B'); // HandlerB handled request B
    handlerA.handle('C'); // None can handle
