var readsync = require('readline-sync')
var access=require('../Utility/Algorithm_Utility')

//var items=access.isReadArray();

var items = [1, 2, 3, 4, 5, 7, 8, 9];
//var items=["amar","bittu", "cute","dangerous"];
var SearchIteam=readsync.questionInt("Enter the value for Search : ");
console.log(access.binary_Search(items, SearchIteam));   
var SearchIteam=readsync.questionInt("Enter the value for Search : ");
console.log(access.binary_Search(items, SearchIteam));

