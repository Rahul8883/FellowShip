class Queue {
    constructor() {
        //  var Queue = new Queue(10);
        var size;
        var rear;
        var front;
    }
    // var data;
    // enqueue(data) {
    //     Queue[this.rear] = data;
    //     this.rear++;
    //     this.size++;
    // }


    enqueue(data) {
        //push the iteam into the queue
        var queue = new Queue(data);
        queue[this.rear] = data;
        this.rear = this.rear + 1;
        this.size += 1;
    }


    dequeue() {
        //pull out the first iteam from the queue
        var data = queue[front];
        front += 1;
        size--;
    }

    size() {
        //get the length of the queue
        return this.size.length;
    }
    isEmpty() {
        //Find whether the queue is empty or not
        return (queue.size) == 0;
    }
    show() {

        console.log("Element is: ");

        for (var i = 0; i < this.size; i++)
            console.log(Queue[i] + " ");
        // console.log("rahul");


    }














    // constructor(){
    //     //initilize the iteam in queue
    //     var rear,front,size;
    //     this.iteam=[];
    // }
    // enqueue(data){
    //     //push the iteam into the queue
    //     var queue=new queue[5];
    //     queue[rear]=data;
    //     rear=rear+1;
    //     size+=1;
    // }
    // dequeue(){
    //     //pull out the first iteam from the queue
    //     var data=queue[front];
    //     front+=1;
    //     size--;
    // }

    // show(){
    //     console.log("Element : ");
    //     for(var i=0; i<this.size; i++){
    //         console.log(queue[front+i]+" ");
    //     }
    // }
}
var Q = new Queue();
Q.enqueue("Rahul Ranjan");
Q.show();