var readsync = require('readline-sync')
var access=require('../Utility/Algorithm_Utility')
var day=readsync.questionInt("Enter the day")
var month=readsync.questionInt("Enter the month")
var year=readsync.questionInt("Enter the year")
access.dayOfWeek(day, month, year);