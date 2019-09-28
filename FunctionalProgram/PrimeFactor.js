var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')

var userinput=readsync.question("Enter the input for prime factor")
access.isprimeFactor(userinput);
