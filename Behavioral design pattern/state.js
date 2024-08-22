class State{
    change(light){
        throw new Error("Error")
    }

    getStateName(){
        throw new Error("Error")
        }
}

class Red extends State{
    change(light){
        light.setState(new Green())
    }

    getStateName(){
        return "Red color"
    }
}

class Green extends State{
    change(light){
        light.setState(new Yellow())
    }

    getStateName(){
        return "Green color"
    }
}

class Yellow extends State{
    change(light){
        light.setState(new Red())
    }

    getStateName(){
        return "Yellow color"
    }
}

class TrafficLight{
    constructor(){
        this.state = new Red()
    }
    
    change(){
        this.state.change(this)
    }

    setState(state){
        this.state = state
    }

    getStateName(){
        return this.state.getStateName()
    }
}

light = new TrafficLight()
console.log(light.getStateName()) // Red color
light.change()
console.log(light.getStateName())  // Green color

