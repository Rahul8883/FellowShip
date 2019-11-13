/**
* Execution : 1. default node cmd> node .js
* @Purpose : Flip coin program.
* @file :  flipCoin.js
* @module : functional program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 20-09-2019
*/
var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')
var Toss=readsync.questionInt("Enter how many time you want to flip the coin:-->")
access.isFlipCoin(Toss);