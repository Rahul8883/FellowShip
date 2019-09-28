var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')
var str = readsync.question('Enter the String for Replace :-->')
access.replaceString(str);