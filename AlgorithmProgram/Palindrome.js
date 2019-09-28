var readsync = require('readline-sync')
var access=require('../Utility/Algorithm_Utility')

var Userinput=readsync.question("Enter the value for palindrome: ");
var result=access.isPlindrome(Userinput);

