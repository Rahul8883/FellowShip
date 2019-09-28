var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')

var Year=readsync.question("Enter the Year for checking purpose:-->")
access.leapyear(Year);