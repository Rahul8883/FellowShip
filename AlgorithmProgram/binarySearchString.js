/**
* Execution : 1. default node cmd> node .js
* @Purpose :  Binary Search for String
* @file : binarySearchString.js
* @module : Algorithm program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 01-10-2019
*/
var readsync = require('readline-sync')
var access = require('../Utility/Algorithm_Utility')
//this is for to take user Input..
//var items=access.isReadArray();
var items = ["amar", "bittu", "cute", "dangerous"];
var SearchIteam = readsync.question("Enter the value for Search : ");
console.log(access.binary_Search_String(items, SearchIteam));
var SearchIteam = readsync.question("Enter the value for Search : ");
console.log(access.binary_Search_String(items, SearchIteam));

