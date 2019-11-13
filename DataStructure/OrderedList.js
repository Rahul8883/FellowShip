/**
 * @purpose:Read a List of Numbers from a file and arrange it ascending Order in a Linked List. 
 *          Take user input for a number, if found then pop the number out of the list else insert the
 *          number in appropriate position.
 */
const input = require('readline-sync')
let list = require('../Utility/DataStructure_Utility/linkedList_Ord_Unord');
let fs = require('fs')
let file = fs.readFileSync("../Utility/file2.txt")
let olist = new list.LinkedList() //object
fileArr = file.toString().split(' ')
console.log(fileArr)
try {
    fileArr.forEach(element => {
        olist.insert(parseInt(element))
        olist.sortList(parseInt(element))
    });
    olist.printList()
    let num = input.questionInt("Enter the number to found")

    ifsearchDelElseadd = (num) => {
        if (olist.findElement(num)) {
            olist.deleteElement(num)
        }
        else {
            console.log("not found")
            olist.insert(num)
            olist.sortList(num)
        }
        arr = olist.getArr()
        fs.writeFileSync("../Utility/file2.txt", arr.join(' '))
        olist.printList()
    }
    ifsearchDelElseadd(num)
}
catch (e) {
    console.log(e.message)
    console.log(e.name)
}