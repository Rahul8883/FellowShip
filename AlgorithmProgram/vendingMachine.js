/**
* Execution : 1. default node cmd> node .js
* @Purpose :  Vending machine programe
* @file : vendingMachine.js
* @module : Algorithm program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 01-10-2019
*/
var readsync = require('readline-sync')
var access = require('../Utility/Algorithm_Utility')
var n = readsync.question("Please enter the amount...")
access.vendingMachine(n);