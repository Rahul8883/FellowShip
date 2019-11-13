/**
* Execution : 1. default node cmd> node .js
* @Purpose :Binary to Decimal program
* @file : binaryToDecimal.js
* @module : Data Structure Program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 12-10-2019
*/
var readsync = require('readline-sync');
var BinaryNumber = readsync.question("Enter the Binary Number:-->");
var value = isBinaryToDecimalNum(BinaryNumber);
console.log("Decimal value is:- " + value);
function isBinaryToDecimalNum(BinaryNumber) {
    let decimalNumber = 0, remender, i = 1;
    while (BinaryNumber != 0) {
        remender = BinaryNumber % 10;
        decimalNumber += remender * i;
        i = i * 2;
        BinaryNumber /= 10;
    }
    return decimalNumber;
}

