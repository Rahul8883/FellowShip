/*-----------------------------FUNCTIONAL PROGRAM ------------------------------*/
/*--------------------------Regular Expression------------------------ */
/*--------This is use to take the input from the User at runtime!!-------*/
var readsync = require('readline-sync')
module.exports = {
    /*
    @purpose: User Input and Replace String Template “Hello <<UserName>>, How are you?” 
    @Auther: Rahul Ranjan
    @version:  1.0
    @return 
    @Since: 25-sep-2019
    */
    replaceString(str) {
        let givenStringIs = "Hello <Username>, how are you";
        let resplacedString = givenStringIs.replace('<Username>', str)
        console.log(resplacedString);
    },
    /*
  @purpose: Flip Coin and print percentage of Heads and Tails 
  @Auther: Rahul Ranjan
  @version:  1.0
  @return 
  @Since: 25-sep-2019
  */

    isFlipCoin(toss) {
        var head = 0,
            tail = 0;
        var randomOut = Math.random()
        if (Toss > 0) {
            if (randomout > 0.5) {
                head++;
            } else {
                tail++;
            }
        } else {
            console.log("Please flip the coin again....");
        }
        var t_per = ((tail / Toss) * 100);
        var h_per = ((head / Toss) * 100);
        console.log("percentage of head to tail is: head=" + h_per + " tail:=" + t_per);
    },
    /*
  @purpose: Leap Year
  @Auther: Rahul Ranjan
  @version:  1.0
  @return 
  @Since: 25-sep-2019
  */
    leapYear(year) {
        if (year > 999 && year <= 9999) {
            if ((year % 100 === 0) || (year % 400 === 0) && (year % 4 === 0)) {
                console.log("Leap Year");
            } else {
                console.log("Not Leap Year");
            }
        } else {
            console.log("Invalid input!!");
        }
    },
    /*
  @purpose: Power of 2
  @Auther: Rahul Ranjan
  @version:  1.0
  @return 
  @Since: 25-sep-2019
  */
    isPowerOf_2(userinput) {
        if (userinput >= 0 && userinput < 31) {
            for (var i = 0; i <= userinput; i++) {
                var result = Math.pow(2, i)
            }
            console.log("resultant value is :=" + result);
        } else {
            console.log("Invalid input !!");
        }
    },
    /*
  @purpose:  Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
  @Auther: Rahul Ranjan
  @version:  1.0
  @return 
  @Since: 25-sep-2019
  */
    isHarmonic(HarmonicInput) {
        var sum = 0.0;
        if (HarmonicInput != 0) {
            for (var i = 1; i <= HarmonicInput; i++) {
                sum = sum + 1 / i;
            }
            console.log("Total sum of harmonic serious is" + sum);
        }
    },
    /*
    @purpose: Computes the prime factorization of N using brute force.
    @Auther: Rahul Ranjan
    @version:  1.0
    @return 
    @Since: 25-sep-2019
    */
    isPrimeFactor(userinput) {
        for (let i = 2; i < userinput; i++) {
            while (userinput % i == 0) {
                userinput = userinput / i;
                console.log(i);
            }
        }
        if (userinput !== 1) {
            console.log(userinput);
        }
    },
    /*
    @purpose: Write a program Distance.java that takes two integer command-line arguments x and y and 
    prints the Euclidean distance from the point (x, y) to the origin (0, 0). The formulae
     to calculate distance = sqrt(x*x + y*y). Use Math.power function
    @Auther: Rahul Ranjan
    @version:  1.0
    @return 
    @Since: 25-sep-2019
    */
    isDistance(userinput_1, userinput_2) {
        var DistanceResult = Math.sqrt((Math.pow(userinput_1, 2)) + (Math.pow(userinput_2, 2)));
        console.log("Euclidean Distance is: " + DistanceResult);
    },
    /*
  @purpose: Coupon Number
  @Auther: Rahul Ranjan
  @version:  1.0
  @return 
  @Since: 25-sep-2019
  */
    isCoupanNumber() {
        var coupan = " ";
        var character = "0123456789";
        for (var i = 0; i < character.length; i++) {
            coupan = coupan + character.charAt(Math.random() * character.length);
        }
        console.log("Coupon Number is->" + coupan);
    },
    /*
    @purpose: A program with cubic running time. Read in N integers and counts the 
      number of triples that sum to exactly 0.
    @Auther: Rahul Ranjan
    @version:  1.0
    @return 
    @Since: 25-sep-2019
    */
    isTriplates(input) {
        console.log("input", input);
        //var input=[1,2,-3,0,5];
        var size = input.length;
        for (var i = 0; i < size - 2; i++) {
            for (var j = i + 1; j < size - 1; j++) {
                for (var k = j + 1; k < size; k++) {
                    if (input[i] + input[j] + input[k] == 0) {
                        console.log("The resultant sum of triplates array is-->" + input[i] + " " + input[j] + " " + input[k]);

                    }
                }
            }
        }
    },
    /*
    @purpose: StopWath to find ellapse time !!.
    @Auther: Rahul Ranjan
    @version:  1.0
    @return 
    @Since: 25-sep-2019
    */

    startTime() {
        var date = new Date();
        return date.getMilliseconds();
    },

    endTime() {
        var date = new Date();
        return date.getMilliseconds();
    },
    findTime(readsync) {
        // var spTime;
        // var stTime;
        stTime = readsync.question("Enter for start watch...")
        var start = this.startTime();

        spTime = readsync.question("Enter for stop watch...")
        var end = this.endTime();
        console.log("ellapse time:-" + (end - start));

    },

}
