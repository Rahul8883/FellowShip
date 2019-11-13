/**
* Execution : 1. default node cmd> node .js
* @Purpose : Palindrome programe
* @file : pelindrome.js
* @module : Algorithm program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 01-10-2019
*/
var readsync = require('readline-sync')
var access = require('../Utility/Algorithm_Utility')
var Userinput = readsync.question("Enter the value for palindrome: ");
var result = access.isPlindrome(Userinput);