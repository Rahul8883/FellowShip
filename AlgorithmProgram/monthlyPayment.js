/**
* Execution : 1. default node cmd> node .js
* @Purpose :  Monthlty Payment
* @file : monthlyPayment.js
* @module : Algorithm program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 01-10-2019
*/
var readsync = require('readline-sync');
var access = require('../Utility/Algorithm_Utility')
var y = readsync.question("Enter the year to pay off --")
var p = readsync.question("inter the principal the loan amount")
var r = readsync.question("enter the rate of intrest")
access.monthlyPament(y, p, r)