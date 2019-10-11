/**
    * @Auther: Rahul Ranjan
    * @purpose: Factory Design pattern 
    * @Since: 09-oct-2019
    */

function watchFactory(price) {
    return {
        price,
        watchManufacture() {
            console.log("Watch Manufacture");
        }
    };
}
const factory1 = watchFactory(240);
console.log(factory1);
const factory2 = watchFactory(420);
console.log(factory2);
const factory3 = watchFactory(9211);
console.log(factory3);
