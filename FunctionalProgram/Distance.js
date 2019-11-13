/**
* Execution : 1. default node cmd> node .js
* @Purpose : find Distance program.
* @file : Distance.js
* @module : functional program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 20-09-2019
*/
var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')
var userinput_1=readsync.question("Enter the First input for Distance Function: ")
var userinput_2=readsync.question("Enter the Second input for Distance Function: ")
access.isDistance(userinput_1, userinput_2);