var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')


var userinput_1=readsync.question("Enter the First input for Distance Function: ")
var userinput_2=readsync.question("Enter the Second input for Distance Function: ")
access.isDistance(userinput_1, userinput_2);