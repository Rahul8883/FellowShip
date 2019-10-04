var readsync = require('readline-sync');


//---------------TO DAY FIND LOGIC BELOW HERE !!---------//
function day(month, day, year)
{
    var y = year - (14 - month) / 12;
    var x = y + y / 4 - y / 100 + y / 400;
    var m = month + 12 * ((14 - month) / 12) - 2;
    var d = (day + x + (31 * m) / 12) % 7;
    return d;
}

//----------------TO LEAP YEAR CHECK LOGIC BELOW HERE---------------------//
function isLeapYear(year)
{
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        return true;
    else
        return false;

}


var month = readsync.question("Enter the Month");
var year = readsync.question("Enter the year");

var months = ["", "january", "February", "March", "April",
    "May", "June", "July", "August", "September", "October", "November", "December"];
var days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (month == 2 && isLeapYear(year)) {
    days[month] = 29;
}
console.log("      " + months[month] + "  " + year);

console.log("Su  Mo  Tu  We  Th  Fr  Sa ");
var d = day(month, 1, year);


//	    for (int i = 0; i < d; i++)
//            System.out.print("   ");
//        for (int i = 1; i <= days[month]; i++) {
//            System.out.format("%2d ", i);
//            if (((i + d) % 7 == 0) || (i == days[month])) System.out.println();
//        }


//var arr = new arr(6, 7);

var arr = [[6], [7]];
var count = 1;
var k = 0;
for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 7; j++) {
        while (k !== d) {
            arr[i][j] = 0;
            k++;
            j++;
        }
        if (count !== days[month] + 1) {
            arr[i][j] = count++;
        } else {
            arr[i][j] = 0;
        }
    }
}

for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 7; j++) {
        if (arr[i][j] === 0) {
            console.log("    ");
        }
        else if (arr[i][j] < 10) {
            console.log("0" + arr[i][j] + "  ");
        }
        else {
            console.log(arr[i][j] + "  ");
        }
    }
    console.log();
}




