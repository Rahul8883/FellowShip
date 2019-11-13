/**
* Execution : 1. default node cmd> node .js
* @Purpose :  square root programe
* @file : sqrt.js
* @module : Algorithm program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 01-10-2019
*/
var readsync=require('readline-sync')
var access=require('../Utility/Algorithm_Utility')
var c=readsync.question("Enter the input for sqrt---")
access.sqrt(c);