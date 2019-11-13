/**
* Execution : 1. default node cmd> node .js
* @Purpose :Leap Year program.
* @file : leapYear.js
* @module : functional program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 20-09-2019
*/
var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')
var Year=readsync.question("Enter the Year for checking purpose:-->")
access.leapYear(Year);