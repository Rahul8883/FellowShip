class Node {
    constructor() {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
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
    dequeue() {
        if (this.head !== null) {
            return 'No item !'
        } else {
            let itemToPop = this.head;
            this.head = this.head.next;
            return itemToPop;
        }
    }

    size() {
        let current, counter;
        [current, counter] = [this.head, 0];
        while (current) {
            counter++;
            current = current.next;
        }
        return counter;
    }
    isEmpty() {
        return this.length() < 1;
    }
    show() {



    }
    peek() {
        if (this.head == null) {
            return this.head.data;
        } else {
            return 'Empty !'
        }
    }
}
module exports={
    
}