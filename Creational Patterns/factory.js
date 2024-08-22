class sales{
    constructor(title){
        this.title = title;
    }

    desc(){
        console.log(`The job role is ${this.title}`)
    }
}

class dev{
    constructor(title){
        this.title = title;
    }

    desc(){
        console.log(`The job role is ${this.title}`)
    }
}

class Jobrole{
    static jobselect(choice, title){
    switch(choice){
        case '1':
            return new sales(title);
        case '2':
            return new dev(title);
        
        default:
            throw new Error("error")
    }
}
}

x =Jobrole.jobselect('2', 'dev');
x.desc()
