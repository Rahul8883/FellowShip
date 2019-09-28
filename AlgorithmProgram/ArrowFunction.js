// const sayHellow=function(name){
// return "Hey there, "+name+" !";
// }
// console.log(sayHellow('Rahul'));
//-----------Arrow Function-------------//
// var sayHellow=(name) => "Hey there, "+name+" !";  
//     console.log(sayHellow('Rahul'));

//--------ArrowFunction---------//
// const todos=[{
//     title:"Comming bridgelabz",
//     isDone: true,
// },{
//     title:"taking Training form bridgelabz",
//     isDone: true,
// },{
//     title:"Record youTube video",
//     isDone: false,
// }]
// const thingdone=todos.filter((todos) =>todos.isDone===true)
// console.log(thingdone);
// var words=[10,12,5,7,8];
// for (var i in words) {
//     console.log(words[i]);
// }
//  first=(word)=>{
//     console.log("word",words);  
// }
//var access=require('../Utility/Functional_Utility')
var readsync= require ('readline-sync')

var userinput=readsync.question("Enter the input for prime factor")
//access.isprimeFactor(userinput);
 isprimeFactor=(userinput) => {
    for (let i = 2; i < userinput; i++) {
     while(userinput%i==0)
     {
     userinput=userinput/i;
    console.log(i);
   }
   }
   if(userinput!==1){
    console.log("userinput",userinput); 
}
 }
isprimeFactor(userinput);
