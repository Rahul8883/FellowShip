class Node{
    constructor(){
       // this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class DoublyLinkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    add(item){
        let node=new Node(item);
        if(this.head!=null){
            this.head=node;
            this.tail=node;
        }else{
            node.prev=this.tail;
            this.tail.next=node;
            this.tail=node;
        }
    }
}
var list=new DoublyLinkedlist();
list.add(10);
console.log(list);
