class node{
    constructor(){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }

/*--------------------Add the item in DoublyLinkedList--------------*/
add(item){
    let node = new Node(item);
    if(this.head!=null){
      this.head=node;
      this.tail=node;
    }else{
      node.prev=this.tail;
      this.tail.next=node;
      this.tail=node
    }
  }
/*-----------------Add the iteam at specified position------------*/

  addAtPos(pos, item){
    let current=this.head;
    let counter=1;
    let node=new Node(item);
    if(pos==0){
      this.head.prev=node
      node.next=this.head
      this.head=node
    }else{
      while(current){
       current=current.next;
       if(counter==pos){
         node.prev=current.prev
         current.prev.next=node
         node.next=current
         current.prev=node
       }
       counter++
     }
   }
 }
/*-----------------Remove the iteam------------*/
 remove( item ) {
    let current = this.head;
    while( current ) {
      if( current.data === item ) {
        if( current == this.head && current == this.tail ) {
          this.head = null;
          this.tail = null;
        } else if ( current == this.head ) {
          this.head = this.head.next
          this.head.prev = null
        } else if ( current == this.tail ) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
     }
     current = current.next
    }
  }

/*-----------------Remove the iteam at specified position------------*/
  removeAtPos( pos ) {
    let current = this.head;
    let counter = 1;
    if( pos == 0 ) {
     this.head = this.head.next;
     this.head.prev = null;
    } else {
     while( current ) {
      current = current.next
      if ( current == this.tail ) {
       this.tail = this.tail.prev;
       this.tail.next = null;
      } else if( counter == pos ) {
       current.prev.next = current.next;
       current.next.prev = current.prev;
       break;
      }
      counter++;
     }
    }
  }

/*-----------------Reverse the iteam of Doubly linkedList------------*/
  reverse(){
    let current = this.head;
    let prev = null;
    while( current ){
     let next = current.next
     current.next = prev
     current.prev = next
     prev = current
     current = next
    }
    this.tail = this.head
    this.head = prev
  }


//   swap( nodeOne, nodeTwo ) {
//     let current = this.head;
//     let counter = 0;
//     let firstNode;
//     while( current !== null ) {
//       if( counter == nodeOne ){
//         firstNode = current;
//       } else if( counter == nodeTwo ) {
//         let temp = current.data;
//         current.data = firstNode.data;
//         firstNode.data = temp;
//       }
//       current = current.next;
//       counter++;
//     }
//     return true
//  }

/*-----------------Find the Length of the DoublyLinkedList--------------*/
length() {
    let current = this.head;
    let counter = 0;
    while( current !== null ) {
     counter++
     current = current.next
    }
    return counter;
  }

  /*----------------Check the DoublyLinkList to find lis is empty or not----------------*/
  isEmpty() {
    return this.length() < 1
  }

/*--------------Search the item of DoublyLinkedList----------*/
  search( item ) {
    let current = this.head;
    let counter = 0;
    while( current ) {
      if( current.data == item ) {
       return counter
      }
      current = current.next
      counter++
    }
    return false;
  }

}