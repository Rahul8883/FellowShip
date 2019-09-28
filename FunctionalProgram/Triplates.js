var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')

var inputArray=readsync.questionInt("Enter the size of array: ")
 var input=[];
for(var i=0;i<inputArray; i++){
   input[i]=readsync.questionInt("Enter the element--")
}
access.isTriplates(input)