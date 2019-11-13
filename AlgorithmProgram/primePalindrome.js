/**
* Execution : 1. default node cmd> node .js
* @Purpose :  prime plindrome
* @file : primePalindrome.js
* @module : Algorithm program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 01-10-2019
*/
var readsync = require('readline-sync');
var access = require('../Utility/Algorithm_Utility');
var primeValue = access.isPrimeNumber(1000);
var Plindromevalue = access.isPlindrome(primeValue);