/**
* Execution : 1. default node cmd> node .js
* @Purpose :Balence Prenthesis program
* @file : balenceParenthesis.js
* @module : Data Structure Program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 12-10-2019
*/
var readsync = require('readline-sync')
var access = require('../Utility/DataStructure_Utility')
var s1 = readsync.question("Enter the userinput:--")
var stackUtil = require('../Utility/stack_Utility')
var ch;
var stk = new stackUtil.stack;

for (var i = 0; i < s1.length; i++) {
    ch = s1.charAt(i);

    if (ch == '{' || ch == '(' || ch == '[') {
        stk.Push(ch);
    } else {
        if (stk.isEmpty()) {
            console.log("Not balenced !!");
            return;
        }
        switch (ch) {
            case '}': if (stk.pop() !== '{') {
                console.log("Not balenced !!");
                return;
            }
                break;
            case ']': if (stk.pop() !== '[') {
                console.log("Not balenced !!");
                return;
            }
                break;
            case ')': if (stk.pop() !== '(') {
                console.log("Not Balenced !!");
                return;
            }
                break;
        }

    }
}
if (stk.isEmpty()) {
    console.log("Balenced !!");

} else {
    console.log("Not Balenced!!");
}