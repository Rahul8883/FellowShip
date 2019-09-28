var readsync=require('readline-sync');
var access=require('../Utility/Algorithm_Utility')
var y=readsync.question("Enter the year to pay off --")
var p=readsync.question("inter the principal the loan amount")
var r=readsync.question("enter the rate of intrest")
access.monthlyPament(y, p, r)