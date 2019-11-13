/**
* Execution : 1. default node cmd> node .js
* @Purpose : Binary Search program
* @file : binarySearch.js
* @module : Algorithm program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 01-10-2019
*/
var readsync = require('readline-sync')
var access = require('../Utility/Algorithm_Utility')
// you can also use userInput value..
//var items=access.isReadArray();
var items = [1, 2, 3, 4, 5, 7, 8, 9];
//this is for String value
//var items=["amar","bittu", "cute","dangerous"];
var SearchIteam = readsync.questionInt("Enter the value for Search : ");
console.log(access.binary_Search(items, SearchIteam));
var SearchIteam = readsync.questionInt("Enter the value for Search : ");
console.log(access.binary_Search(items, SearchIteam));

