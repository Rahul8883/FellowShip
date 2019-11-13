/**
* Execution : 1. default node cmd> node .js
* @Purpose :  Day of Week
* @file : dayOfWeek.js
* @module : Algorithm program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 01-10-2019
*/
var readsync = require('readline-sync')
var access = require('../Utility/Algorithm_Utility')
var day = readsync.questionInt("Enter the day")
var month = readsync.questionInt("Enter the month")
var year = readsync.questionInt("Enter the year")
access.dayOfWeek(day, month, year);