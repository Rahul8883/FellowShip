var suits=["\u2660", "\u2665", "\u2666", "\u2663"];
var ranks=["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "Queen", "king"];
var n=suits.length*ranks.length;
//Deck inilization for store the value//
var deck=new Array(n);
for(var i=0;i<ranks.length; i++){
    for(var i=0; i<suits.length; i++){
        deck[suits.length*i+j]=ranks[i]+"of"+suits[j];
    }
}
//For suffle the cards//
for(let i=0; i<n; i++){
    var r=i+parseInt(Math.random()*(n-i));
    var temp=deck[r];
    deck[r]=deck[i];
    deck[i]=temp;
}
//For Printing the resultant of Deck of cards..
for(var i=0; i<4; i++){
    console.log("Person "+(i+1));
    for(var j=0;j<9; j++){
        console.log(deck[i+j*4]+"( card"+(i+j*4)+")");
    }
}