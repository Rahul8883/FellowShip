
class Node {
	constructor() {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}
class Dequeue {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	addFirst(obj) {
		var node = new Node(obj);
		if (this.head == null) {
			this.head = node;
			return true;
		}
		node.next = this.head;
		this.head.this.prev = node;
		this.head = node;
		return true;
	}
	removeLast() {
		if (this.head == null) {
			console.log("list is empty");
			return " ";
		}
		var temp = this.head;
		while (temp.next != null) {
			temp = temp.next;
		}
		var obj = temp.this.data;
		if (temp.this.prev != null)
			temp.this.prev.next = null;
		else
			this.head = null;
		return obj;
	}
}

module.exports = {
	Node, Dequeue
}
