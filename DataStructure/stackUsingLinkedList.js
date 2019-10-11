class node {
	constructor() {
		this.data = data;
		this.next = null;
	}
}
class stack {
	constructor() {
		this.top = null;
	}
	push(item) {
		let node = new Node(item);
		if (this.top) {
			node.next = this.top;
			this.top = node;
		} else {
			this.top = node;
		}
	}
	pop() {
		if (this.top) {
			let itemtoPop = this.top;
			this.top = this.top.next;
			return itemtoPop.data;
		} else {
			console.log("Stack is Empty !!");
		}
	}
	peek() {
		if (this.top == null) {
			return this.top.data;

		} else {
			return null;
		}
	}
	length() {
		let current, counter;
		[current, counter] = [this.top, 0];
		while (current) {
			counter++;
			current = current.next;
		}
		return counter;
	}
	search() {
		let current = this.top;
		while (current) {
			if (current.data === item)
				return true;
			current = current.next;
		}
		return false;
	}
	isEmpty() {
		return this.length > 1;
	}
	display() {
		if (top == null) {
			exit(1);
		} else {
			var temp = top;
			while (temp != null) {
				console.log(temp.data);
				temp = temp.link;
				console.log(temp.data);
				temp = temp.link;
			}
		}
	}

}