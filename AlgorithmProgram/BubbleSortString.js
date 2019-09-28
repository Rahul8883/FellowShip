var readsync = require('readline-sync')
var access=require('../Utility/Algorithm_Utility')
//var array=[3,0,2,5,-1,4,1];

var inputArray = readsync.question("Enter the size of array: ")
var input = [];
for (var i = 0; i < inputArray; i++) {
    input[i] = readsync.question("Enter the element--")
}
console.log(input);
access.bubble_sort_String(input);
