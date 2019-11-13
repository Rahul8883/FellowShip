/**
* Execution : 1. default node cmd> node .js
* @Purpose :find triplate  program.
* @file : Triplates.js
* @module : functional program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 20-09-2019
*/
var access = require('../Utility/Functional_Utility')
var readsync = require('readline-sync')
var inputArray = readsync.questionInt("Enter the size of array: ")
var input = [];
for (var i = 0; i < inputArray; i++) {
   input[i] = readsync.questionInt("Enter the element--")
}
access.isTriplates(input)