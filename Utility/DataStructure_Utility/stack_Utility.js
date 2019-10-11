class Mystack {
    constructor(data) {
        this.next = null
        this.data = data;
    }
}
class stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        if (this.size == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    Push(data) {
        if (this.isEmpty()) {
            var array = new Mystack(data);
            this.top = array;
            this.size++
            return;
        }
        else {
            var array = new Mystack(data);
            array.next = this.top;
            this.top = array;
            this.size++;

        }
    }
    pop() {
        //return datas which are in the stack
        if (this.isEmpty()) {
            return 'no datas'
        }

        var dat = this.top.data;
        this.top = this.top.next;
        this.size--;
        //console.log("popped value "+data);
        return dat;

    }
    peek() {
        return this.top.data;
        //return the top value i.e added in the last
    }

    show() {
        var str = " ";
        for (var i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + " ";
            return str;
        }
    }
}
module.exports = {
    Mystack, stack
}
