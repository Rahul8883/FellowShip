/**
    * @Auther: Rahul Ranjan
    * @purpose:Create a JSON file having Inventory Details for Rice,
    *          Pulses and Wheats with properties name, weight, price per kg. 
    * @Since: 08-oct-2019
    */

var utiRice = require('../inventrydataManagement/Glossary');
var fs = require('fs');
var content = fs.readFileSync('inventry.json', 'utf-8')
// console.log(content);
var obj = JSON.parse(content);
console.log('====================================');
console.log("Resultant of Rice");
console.log('====================================');
var len = obj.Rice.length;
for (var i = 0; i < len; i++) {
    var name = obj.Rice[i].Name;
    var weight = obj.Rice[i].Weight;
    var price = obj.Rice[i].Price;
    var company = new utiRice(name, weight, price);
    var total = company.total();
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log("Total price of rice is =" + total)
}
console.log('====================================');
console.log("Resultant of pulses");
console.log('====================================');
var leng = obj.Pulses.length;
for (var i = 0; i < leng; i++) {
    var name = obj.Pulses[i].Name;
    var weight = obj.Pulses[i].Weight;
    var price = obj.Pulses[i].Price;
    var company = new utiRice(name, weight, price);
    var total = company.total();
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log("Total price of rice is =" + total)
}
console.log('====================================');
console.log("Resultant of Wheats");
console.log('====================================');
var leng = obj.Wheats.length;
for (var i = 0; i < leng; i++) {
    var name = obj.Wheats[i].Name;
    var weight = obj.Wheats[i].Weight;
    var price = obj.Wheats[i].Price;
    var company = new utiRice(name, weight, price);
    var total = company.total();
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log("Total price of rice is =" + total)
}