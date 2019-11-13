/*----------------Defining node here-----------------*/
class Node{
    constructor(){
        this.data=data;
        this.next=null;
    }
}
/*----------------Defining queue using linkedList-----------------*/
class queueUsingLinkedList{
    constructor(){
        this.tail=null;
        this.head=null;
    }
/*----------------add the element into queue using linkedList-----------------*/
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
/*----------------Remove the element into queue using linkedList-----------------*/
    dequeue(){
        if(this.hrad==null){
            return 'No item !'
        }else{
            let itemToPop=this.head;
            this.head=this.head.next;
            return itemToPop;
        }
    }
/*----------------find the length of queue using linkedList-----------------*/
    length(){
        let current, counter;
        [current, counter]=[this.head, 0];
        while(current){
            counter++;
            current=current.next;
        }
        return counter;
    }
/*----------------peek the queue element using linkedList-----------------*/
    peek(){
        if(this.head==null){
            return this.head.data;
        }else{
            return 'Empty';
        }
    }
/*----------------check the queue element using linkedList either it is empty or not-----------------*/    
    isEmpty(){
        return this.length()<1;
    }
}