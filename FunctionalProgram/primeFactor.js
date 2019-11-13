/**
* Execution : 1. default node cmd> node .js
* @Purpose :prime Factor program.
* @file : primeFactor.js
* @module : functional program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 20-09-2019
*/
var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')
var userinput=readsync.question("Enter the input for prime factor")
access.isprimeFactor(userinput);
