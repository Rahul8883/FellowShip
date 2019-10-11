/**
    * @Auther: Rahul Ranjan
    * @purpose:Extend the above program to Create InventoryManager to manage the Inventory. 
    * The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
    * The InventoryManager will call each Inventory Object in its list to calculate the Inventory
    * Price and then call the Inventory Object to return the JSON String. The main program 
    * will be with InventoryManager
    * @Since: 08-oct-2019
    */

// Accessing the Glossary class//
var utiRice = require('../inventrydataManagement/Glossary');
//Accessing the file reader Package//
var fs = require('fs');
var content = fs.readFileSync('package.json', 'utf-8')
var obj = JSON.parse(content);
console.log('====================================');
console.log("Resultant of Rice");
console.log('====================================');
var len = obj.Rice.length;
var inventoryArray1 = [];
for (var i = 0; i < len; i++) {
    var name = obj.Rice[i].Name;
    var weight = obj.Rice[i].Weight;
    var price = obj.Rice[i].Price;
    var company = new utiRice(name, weight, price);
    var total = company.total();
    console.log("Name : " + name + " , " + "Weight : " + weight + " , " + "price : " + price);
    console.log("Total price of rice is =" + total)
    let data = {
        "name": name,
        "weight": weight,
        "price": price
    }
    inventoryArray1.push(data);
}
console.log("inventoryArray", inventoryArray1);
let dataaaa = JSON.stringify(inventoryArray1);
fs.writeFileSync('Program_OutPut.json', dataaaa);