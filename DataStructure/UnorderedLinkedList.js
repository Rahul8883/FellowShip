var readsync=require('readline-sync');
var access=require('../Utility/DataStructure_Utility')
var fs=require('fs');
fs.readFile('/home/admin1/Desktop/Rahul.txt', 'utf-8', (err, data)=>{

     if (err) {
         console.log(err);
     } else
         // throws err;
    
    console.log(data);
//  var splitedData = data.split(" ");
// //   console.log(splitedData);
// var arr;
// var list=new access.UnorderedLinkedList;

// for(var i=0; i<splitedData.length; i++){
//    arr+=splitedData[i];
//    list.insertAtFirst(arr)
// }
// console.log(list);  
// //   for(var i=0; i<splitedData.length; i++){

// //   }  


var value=[];

var value=data.split("  ")
for(var i=0; i<value.length; i++){
    console.log(value[i]);
    
}
})

