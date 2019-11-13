/**
    * @Auther: Rahul Ranjan
    * @purpose: Prototype Design pattern 
    * @Since: 09-oct-2019
    */
function Customer(first, last, status) {
    this.first = first;
    this.last = last;
    this.status = status;
    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
            ", status: " + this.status);
    };
}

function customerPrototype(proto) {
    this.proto = proto;
    this.clone = function () {
        var customer = new Customer();
        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;
        return customer;
    };
}

function run() {
    var proto = new Customer("Rahul", "Ranjan", "Mechanical Engineer");
    var prototype = new customerPrototype(proto);
    var customer = prototype.clone();
    customer.say();
}
run();