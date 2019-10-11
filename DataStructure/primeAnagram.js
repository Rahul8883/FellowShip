class primeAnagram{
	constructor(){
primeAnagrams() {
	var ar = new ArrayList();
	console.log();
	var b;
	var count = 0;
	for (var i = 2; i <= 1000; i++) {
		b = true;
		for (var j = 2; j < i / 2; j++) {
			if (i % j == 0) {
				b = false;
				break;
			}
		}
		if (b)
			ar.add(i);
	}
	for (var i = 0; i < ar.size(); i++) {
		for (var j = i + 1; j < ar.size(); j++) {
			if (anagram(ar.get(i), ar.get(j))) {
				count++;
			}
		}
	}
	var array = new int[count][2];
	var k = 0;
	for (var i = 0; i < ar.size(); i++) {
		for (var j = i + 1; j < ar.size(); j++) {
			if (anagram(ar.get(i), ar.get(j))) {
				var val1 = ar.get(i);
				var val2 = ar.get(j);
				console.log(array[k][0] = val1);
				console.log(" ");
				console.log(array[k][1] = val2);
				console.log();
				k++;
			}
		}
	}
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
},
count(n){
	var count = new int[10];
	var temp = n;
	while (temp != 0) {
		var r = temp % 10;
		count[r]++;
		temp = temp / 10;
	}
	return count;
}
primeAnagrams();
	}
}
