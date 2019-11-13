/*
*@purpose :Anagram program
*@file : Anagram.js
*@module :Algorithm program
*@author: Rahul Ranjan
*version:1.0.0
*/
var readsync = require('readline-sync')
var access=require('../Utility/Algorithm_Utility')

var string_1=readsync.question("Enter the First String For Anagram Chek...")
var string_2=readsync.question("Enter the Second String For Anagram Chek...")
var result=access.isAnagram(string_1, string_2);
if(result=true){
    console.log("Anagaram")
}else{
    console.log("Not Anagaram");
    
}

