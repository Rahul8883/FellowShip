/*------------User Defined Class Node----------------*/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class UnorderedLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
/*---------------isEmpty-----------------------*/
    isEmpty() {
        if (this.size == 0) {
            return true;
        } else {
            return false;
        }
    }

/*-------------Find the size of LinkedList-----------*/

    getListSize() {
        console.log(this.size);
    }
/*---------Add the data at first index-----------*/

    insertAtFirst(data) {
        var new_Node = new Node(data);
        if (this.head == null) {
            this.head = new_Node;
            this.size++;
        } else {
            new_Node.next = this.head;
            this.head = new_Node;


        }
    }

/*------------insert at last-----------*/
    insertAtLast(data) {
        var new_Node = new Node(data);
        var temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
            this.size++;
        }
        temp.next = new_Node;
    }
/*--------------insert at specified index----------*/
    insertAtPosition(data, index) {
        if (index == 1) {
            this.insertAtFirst(data);
        } else if (index == size - 1) {
            this.insertAtLast(data);
        } else if (index > 1 && index <= this.size) {
            var new_Node = new Node(data);
            temp = this.head;
            for (var i = 0; i < index - 1; i++) {
                temp = temp.next;
                temp.next = new_Node;
            }
            this.size++;
        } else {
            console.log("Insertion is not possible...")
        }
    }

/*------------Remove at first position--------------*/

    removeAtFirst() {
        if (this.head == null) {
            console.log("List is already Empty");
        } else {
            this.head = this.head.next;
            this.size--;
        }
    }

/*------------Remove at last index---------*/

    removeAtLast() {
        if (this.head == null) {
            console.log("lis is already empty");
        } else if (this.size === 1) {
            this.removeAtFirst();
            //this.head=null;
        } else {
            var temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = null;
            this.size--;
        }
    }

    removeAtposition(index) {
        var temp = this.head;
        var temp1 = this.head.next;
        for (var i = 0; i < index; i++) {

            if (temp1.next == null) {
                break;
            }
            temp = temp1;
            temp1 = temp1.next;
        }
        temp.next = temp1.next;
        this.size--;
    }
/*-----------------Search the Node-----------*/
    search(data) {
        var temp = head;
        while (temp !== null) {
            if (temp.data === data) {
                return true;
            } else {
                temp = temp.next;
            }
        }
    }
/*-----------Display the List------------*/
    viewList() {
        console.log("Data is:--");
        var temp;
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            var temp = this.head;

            var str = "";
            while (temp) {
                str += temp.data + " ";
                temp = temp.next;
            }
        }
        console.log(str);
    }
}
var l1 = new UnorderedLinkedList();
l1.insertAtFirst("Rahul");
l1.insertAtFirst("ramayana");
l1.insertAtFirst("bridgelabz");
l1.removeAtposition(2);
l1.viewList();
l1.removeAtLast();
l1.removeAtFirst();
l1.viewList();
l1.insertAtFirst(10);
l1.insertAtLast("rahulRanjan");
l1.insertAtLast(20);
l1.viewList();
module.exports={
    Node, UnorderedLinkedList
}
