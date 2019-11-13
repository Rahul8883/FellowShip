/**
* Execution : 1. default node cmd> node .js
* @Purpose :  Temparature conversation
* @file : tempConver.js
* @module : Algorithm program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 01-10-2019
*/
var readsync=require('readline-sync');
var accecc=require('../Utility/Algorithm_Utility');
var celsuis=readsync.question("Enter the celsius value :--")
var fahrenheit=readsync.question("Enter the fahrenheit value :--")
accecc.tempConversion(celsuis, fahrenheit);