var readsync = require('readline-sync')
var access=require('../Utility/Algorithm_Utility')

//var items=access.isReadArray();


var items=["amar","bittu", "cute","dangerous"];
var SearchIteam=readsync.question("Enter the value for Search : ");
console.log(access.binary_Search_String(items, SearchIteam));   
var SearchIteam=readsync.question("Enter the value for Search : ");
console.log(access.binary_Search_String(items, SearchIteam));

