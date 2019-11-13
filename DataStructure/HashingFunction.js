/**
* Execution        :   1. default node      cmd> node .js 
*  @Purpose        : Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
*                    efficiently search a number from a given set of number
*  @file           : hashingFunction.js
*  @module         : HashingFunction -sortedInstDupFalsOrAdd, sortedInsertwodupli, push, getArr,printList
*  @author         : Rahul Ranjan 
*  @version        : 1.0.0
*  @since          : 15-10-2019
*/
let hashF = require('../Utility/DataStructure_Utility/SinglyLinkedList_Utility')
const input = require('readline-sync')
let Num = input.questionInt("Enter the number to find:")
const fs = require('fs')
X = fs.readFileSync("../Utility/file3.txt")
console.log(X)
hashF.hashFunc(X, Num)
