class Bill{
    constructor(customerType){
        this.customerType = customerType;
    }

    calculate(){
        throw new error("Error");
    }
}

class Residential extends Bill{
constructor(units){
    super('residential');
    this.units = units;
}

calculate(){
    return this.units*3.5;
}
}

class Industrial extends Bill{
    constructor(units){
        super('industrial');
        this.units = units;
    }

    calculate(){
        return this.units*5.5;
    }

}

class BillFactory{
    static createBill(customerType, units){
    {
        
        if(customerType === 'Residential'){
            return new Residential(units);
        }
        else if(customerType === 'Industrial'){
            return new Industrial(units);
        }
    }
}
}

bill1 = BillFactory.createBill('Residential', 120);
console.log(bill1.calculate())
