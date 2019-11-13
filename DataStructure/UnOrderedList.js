/**
 * @purpose: Read the Text from a file, split it into words and arrange it as Linked List.
 *           Take a user input to search a Word in the List. If the Word is not found then add it
 *           to the list, and if it found then remove the word from the List. In the end save the
 *           list into a file
 */
const input = require('readline-sync')
let list = require('../Utility/DataStructure_Utility/linkedList_Ord_Unord');
let fs = require('fs')
file = fs.readFileSync("../Utility/file.txt")
try {
    let linklist = new list.LinkedList() ////object
    fileArr = file.toString().split(' ')
    console.log(fileArr)
    let name = input.question("Enter the data you want to search ");
    fileArr.forEach(element => {
        linklist.insert(element)
    });
    ifsearchDelElseadd = (name) => {
        if (linklist.findElement(name)) {
            linklist.deleteElement(name)
        }
        else {
            linklist.insert(name)
        }
        arr = linklist.getArr()
        fs.writeFileSync("../Utility/file.txt", arr.join(' '))
        linklist.printList()
    }
    ifsearchDelElseadd(name)
}
catch (e) {
    console.log(e.message);
    console.log(e.name);
}
