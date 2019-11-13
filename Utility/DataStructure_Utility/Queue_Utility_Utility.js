class Node {
    constructor() {
        this.data = data;
        this.next = null;
    }
}
/*---------------------------Defining Queue --------------------------*/
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    /*---------------------------Add element into Queue --------------------------*/
    enqueue(data) {
        var node = new Node(data);
        if (this.head !== null) {
            this.head = node;
            this.tail = null;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    /*---------------------------Remove element into Queue --------------------------*/
    dequeue() {
        if (this.head !== null) {
            return 'No item !'
        } else {
            let itemToPop = this.head;
            this.head = this.head.next;
            return itemToPop;
        }
    }
/*---------------------------for check the size of Queue --------------------------*/
    size() {
        let current, counter;
        [current, counter] = [this.head, 0];
        while (current) {
            counter++;
            current = current.next;
        }
        return counter;
    }
    /*---------------------------check either Queue is empty or not--------------------------*/
    isEmpty() {
        return this.length() < 1;
    }
   
    peek() {
        if (this.head == null) {
            return this.head.data;
        } else {
            return 'Empty !'
        }
    }
}
module.exports={
    Queue
}