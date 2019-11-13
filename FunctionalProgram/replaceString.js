/**
* Execution : 1. default node cmd> node .js
* @Purpose :Replace String program.
* @file : replaceString.js
* @module : functional program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 20-09-2019
*/
var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')
var str = readsync.question('Enter the String for Replace :-->')
access.replaceString(str);