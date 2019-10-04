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

