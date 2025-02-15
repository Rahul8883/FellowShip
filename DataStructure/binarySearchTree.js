/**
* Execution : 1. default node cmd> node .js
* @Purpose :Binary search tree program
* @file : binarySearchTree.js
* @module : Data Structure Program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 12-10-2019
*/
function isFactorial(n) {
	var fact = 1;
	for (var i = 1; i <= n; i++) {
		fact *= i;
	}
	return fact;
}
var readsync = require('readline-sync');
var n = readsync.question("Enter the size of an array: ")
var result = isFactorial(n);
var result1 = isFactorial(2 * n);
var result2 = isFactorial(n + 1);
var result3 = isFactorial(n);
var finalResult = (result1 / (result2 * result3)) % (Math.pow(10, 8) + 7);
console.log(finalResult);

