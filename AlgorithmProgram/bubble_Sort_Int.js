/**
* Execution : 1. default node cmd> node .js
* @Purpose :  Bubble short for integer
* @file : bubble_sort_int.js
* @module : Algorithm program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 01-10-2019
*/
var readsync = require('readline-sync')
var access = require('../Utility/Algorithm_Utility')
//harcoat vaue for input..
//var array=[3,0,2,5,-1,4,1];
var inputArray = readsync.questionInt("Enter the size of array: ")
var input = [];
for (var i = 0; i < inputArray; i++) {
    input[i] = readsync.questionInt("Enter the element--")
}
console.log(input);
access.bubble_sort_Integer(input);
