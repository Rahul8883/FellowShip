/**
* Execution : 1. default node cmd> node .js
* @Purpose :Harmonic function program.
* @file : harmonicFunction.js
* @module : functional program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 20-09-2019
*/
var access = require('../Utility/Functional_Utility')
var readsync = require('readline-sync')
var HarmonicInput = readsync.question("Enter the Harmonic value:  ")
access.isHarmonic(HarmonicInput);