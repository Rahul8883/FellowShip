/**
* Execution : 1. default node cmd> node .js
* @Purpose :palindrome Checker program
* @file : pelindromeChecker.js
* @module : Data Structure Program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 12-10-2019
*/
var readsync=require('readline-sync');
var access=require('./Dequeue')
        var str= readsync.question("Enter the string")
		var length=readsync.questionInt("Enter the  length");
		var deque = new Dequeue();
	for (var i=length-1;i>=0;i--) {
		deque.addFirst(str.charAt(i));
	}
	var reverse="";
	for(var i=0;i<length;i++) {
		var ch=deque.removeLast();
		reverse+=ch;
	}
	if(str.equals(reverse)) {
		console.log("plelindrome");
	}
	else {
		console.log("not pelindrome");
	}