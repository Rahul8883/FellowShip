var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')

var userinput=readsync.question("please enter the number power function !!")
access.isPowerOf_2(userinput);