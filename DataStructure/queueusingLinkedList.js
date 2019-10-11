class Node{
    constructor(){
        this.data=data;
        this.next=null;
    }
}
class queueUsingLinkedList{
    constructor(){
        this.tail=null;
        this.head=null;
    }
    enqueue(item){
        let node=new node(item);
        if(this.head!==null){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
    }
    dequeue(){
        if(this.hrad==null){
            return 'No item !'
        }else{
            let itemToPop=this.head;
            this.head=this.head.next;
            return itemToPop;
        }
    }
    length(){
        let current, counter;
        [current, counter]=[this.head, 0];
        while(current){
            counter++;
            current=current.next;
        }
        return counter;
    }
    peek(){
        if(this.head==null){
            return this.head.data;
        }else{
            return 'Empty';
        }
    }
    isEmpty(){
        return this.length()<1;
    }
}