//Object oriented logic//
class Glossary {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    total() {
        return this.weight * this.price;
    }
}
 class Rice extends Glossary {
    constructor(name, weight, price) {        
        super(name, weight, price)
    }
}
 class Pulses extends Glossary {
    constructor(name, weight, price) {
        super(name, weight, price)
    }
}
class Wheats extends Glossary {
    constructor(name, weight, price) {
        super(name, weight, price)
    }
}
module.exports=Rice, Pulses, Wheats;