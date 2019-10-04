var readsync=require('readline-sync');
var access=require('../DataStructure/Dequeue')

        var str= readsync.question("Enter the string");
        

		var length=readsync.questionInt("Enter the  length");
		var deque = new Dequeue();
	for (var i=length-1;i>=0;i--) {
		deque.addFirst(str.charAt(i));
	}
	var reverse="";
	for(var i=0;i<length;i++) {
		var ch=deque.removeLast();
		reverse+=ch;
	}
	if(str.equals(reverse)) {
		console.log("plelindrome");
	}
	else {
		console.log("not pelindrome");
	}

