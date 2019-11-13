/**
* Execution : 1. default node cmd> node .js
* @Purpose :Define prime Anagram using stack program
* @file : primeAnagramStack.js
* @module : Data Structure Program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 12-10-2019
*/
class PrimeAnagramStack {
	constructor() {
	var obj = new StackUsingLinkedlist();
		var b;
		var count=0;
		for (var i = 2; i <= 1000; i++) {
			b = true;
			for (var j = 2; j < i / 2; j++) {
				if (i % j == 0) {
					b = false;
					break;
				}
			}
			if (b)
				count++;
		}
		var a=new int[count];
		var k=0;
		for (var i = 2; i <= 1000; i++) {
			b = true;
			for (var j = 2; j < i / 2; j++) {
				if (i % j == 0) {
					b = false;
					break;
				}
			}
			if (b)
			{
				if(k<count)
				{
					a[k]=i;
					k++;
				}
			}
				
		}
		for(var l=0;l<a.length;l++)
		{
			for(var m=l+1;m<a.length;m++)
			{
				if(anagram(a[l],a[m]))
				{
					obj.push(a[l]);
					obj.push(a[m]);
				}
			}
		}
		obj.display();
		


	}
	 anagram(n1, n2) {
		var n1count = count(n1);
		var n2count = count(n2);
		for (var i = 0; i < n2count.length; i++) {
			if (n1count[i] != n2count[i]) {
				return false;
			}
		}
		return true;
	}
	 count(n) {
		var count = new int[10];
		var temp = n;
		while (temp != 0) {
			var r = temp % 10;
			count[r]++;
			temp = temp / 10;
		}
		return count;
	}
	

}
