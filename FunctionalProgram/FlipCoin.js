var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')


var Toss=readsync.questionInt("Enter how many time you want to flip the coin:-->")
access.isFlipCoin(Toss);