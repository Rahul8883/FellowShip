/**
* Execution : 1. default node cmd> node .js
* @Purpose : power Function program.
* @file : powerFunction.js
* @module : functional program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 20-09-2019
*/
var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')
var userinput=readsync.question("please enter the number power function !!")
access.isPowerOf_2(userinput);