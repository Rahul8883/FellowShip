var readsync=require('readline-sync');
var accecc=require('../Utility/Algorithm_Utility');
var celsuis=readsync.question("Enter the celsius value :--")
var fahrenheit=readsync.question("Enter the fahrenheit value :--")
accecc.tempConversion(celsuis, fahrenheit);