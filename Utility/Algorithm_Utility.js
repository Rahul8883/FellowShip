/*-----------------------------ALGORITHM PROGRAM ------------------------------*/
/*--------------------------Regular Expression------------------------------*/
/*--------This is use to take the input from the User at runtime!!-------*/
var readsync = require('readline-sync')
module.exports = {
    /**
    * @Auther: Rahul Ranjan
    * @purpose: This function is use to Read the array from user at runTime !! 
    * @Since: 25-sep-2019
    */
    isReadArray() {
        var inputArray = readsync.question("Enter the size of array: ")
        var input = [];
        for (var i = 0; i < inputArray; i++) {
            input[i] = readsync.question("Enter the element--")
        }
        console.log(input);
    },

    /**
     * @Auther: Rahul Ranjan
     * @param {First User input } string_1 
     * @param {Second user input} string_2
     *  @purpose: this function is use to check entered two user input String is Anagram or not !! 
     * @Since: 25-sep-2019
     */

    isAnagram(string_1, string_2) {
        var count_1 = new Array(26);
        var count_2 = new Array(26);
        if (string_1.length != string_2.length) {
            console.log("it is Invalid input");
        } else if (string_1.length == string_2.length) {
            for (var i = 0; i < string_1.length; i++) {
                var ch = string_1.charAt(i);
                if (ch >= 'A' && ch <= 'Z') {
                    count_1[ch - 65]++;
                } else if (ch >= 'A' && ch <= 'Z') {
                    count_1[ch - 65]++;
                }
            }
            for (var i = 0; i < string_2.length; i++) {
                var ch = string_1.charAt(i);
                if (ch >= 'A' && ch <= 'Z') {
                    count_2[ch - 65]++;
                } else if (ch >= 'A' && ch <= 'Z') {
                    count_2[ch - 65]++;
                }
            }
            for (var i = 0; i < count_2.length; i++) {

                if (count_1[i] != count_2[i]) {
                    return false;
                }
            }
        }
    },

    /**
     * @Auther: Rahul Ranjan
     * @param {User input } n
     *  @purpose: this function is use to check prime number or not !! 
     * @Since: 25-sep-2019
     */

    isPrimeNumber(UserInput) {
        var j = 0;
        var counter = 0;
        var primevalue = " ";
        var i = 0;
        for (i = 1; i <= n; i++) {
            counter = 0;
            for (j = i; j >= 1; j--) {
                if (i % j == 0) {
                    counter = counter + 1;
                }
            }
            if (counter == 2) {
                primevalue = primevalue + i + " ";
                var array = [primevalue];
            }
        }
        console.log(array);
    },

    /**
     * @Auther: Rahul Ranjan
     * @param {User input } UserInput
     *  @purpose: This function is use to check Pelindrome or not !! 
     * @Since: 25-sep-2019
     */
    isPlindrome(UserInput) {
        var inputLength = Userinput.length;
        var mid = Math.floor(inputLength / 2);
        for (var i = 0; i < mid; i++) {
            if (Userinput[i] !== Userinput[inputLength - 1 - i]) {
                console.log("Not Palindrome");
            }
            else {
                console.log("Palindrome");
                break;
            }
        }
    },

    /**@author: Rahul Ranjan
     * @purpose: This function is use to find the search iteam into the sorted array using Binary Search for String!! 
     * @Since: 25-sep-2019
     * @param {Sorted Array} items 
     * @param {Search item} value 
     */
    binary_Search(items, value) {
        var firstIndex = 0,
            lastIndex = items.length - 1;
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

        while (items[middleIndex] != value && firstIndex < lastIndex) {
            if (value < items[middleIndex]) {
                lastIndex = middleIndex - 1;
            }
            else if (value > items[middleIndex]) {
                firstIndex = middleIndex + 1;
            }
            middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        }
        return (items[middleIndex] != value) ? -1 : middleIndex;
    },

    /**@author: Rahul Ranjan
     * @purpose: This function is use to find the search iteam into the sorted array using Binary Search for String!! 
     * @Since: 25-sep-2019
     * @param {Sorted Array} items 
     * @param {Search item} value 
     */
    binary_Search_String(items, value) {
        var firstIndex = 0,
            lastIndex = items.length - 1;
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        while (items[middleIndex] != value && firstIndex < lastIndex) {
            if (value < items[middleIndex]) {
                lastIndex = middleIndex - 1;
            }
            else if (value > items[middleIndex]) {
                firstIndex = middleIndex + 1;
            }
            middleIndex = Math.floor((lastIndex + firstIndex) / 2);
        }
        return (items[middleIndex] != value) ? -1 : middleIndex;
    },

    /**@author: Rahul Ranjan
        * @purpose: This function is use to sort array using Bubble sort for integer!! 
        * @Since: 25-sep-2019
        * @param {UnSorted Array} array 
        */
    bubble_sort_Integer(array) {
        var temp;
        var len = array.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        for (var i = 0; i < array.length; i++) {
            console.log(array + " ");
            return array;
        }
    },

    /**@author: Rahul Ranjan
         * @purpose: This function is use to sort array using Bubble sort for String!! 
         * @Since: 25-sep-2019
         * @param {UnSorted Array} array 
         */
    bubble_sort_String(array) {
        var temp;
        var len = array.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        for (var i = 0; i < array.length; i++) {
            console.log(array + " ");
            return array;
        }
    },

    /**@author: Rahul Ranjan
     * @purpose: This function is use to sort array using insertion sort for integer!! 
     * @Since: 25-sep-2019
     * @param {UnSorted Array} array 
     */
    insertionSort(array) {
        var temp, j;
        for (var i = 1; i < array.length; i++) {
            temp = array[i];
            j = i;
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1];
                j = j - 1;
            }
            array[j] = temp;
        }
        for (var i = 0; i < array.length; i++) {
            console.log(array + " ")
            return array;
        }
    },

    /**@author: Rahul Ranjan
     * @purpose: This function is use to sort array using insertion sort for String!! 
     * @Since: 25-sep-2019
     * @param {UnSorted Array} array 
     */
    insertionSortString(array) {
        var temp, j;
        for (var i = 1; i < array.length; i++) {
            temp = array[i];
            j = i;
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1];
                j = j - 1;
            }
            array[j] = temp;
        }
        for (var i = 0; i < array.length; i++) {
            console.log(array + " ")
            return array;
        }
    },

    /**
     * @author: Rahul Ranjan
     * @purpose: This function is use to find day of the week
     *  @Since: 25-sep-2019
     * @param {day} d 
     * @param {Month} m 
     * @param {Year} y 
     */
    dayOfWeek(d, m, y) {
        let y0 = y - (14 - m) / 12;
        let x = y0 + y0 / 4 - y0 / 100 + y0 / 400;
        let m0 = m + 12 * ((14 - m) / 12) - 2;
        let d1 = (d + x + 31 * m0 / 12) % 7;
        var d0 = Math.floor(d1 + 1)
        console.log("d", d0);
        if (d0 === 0) {
            console.log("sunday");
        } else if (d0 === 1) {
            console.log("Monday");
        } else if (d0 === 2) {
            console.log("Tuesday");
        } else if (d0 === 3) {
            console.log("wednesday");
        } else if (d0 === 4) {
            console.log("Thrusday");
        } else if (d0 === 5) {
            console.log("Friday");
        } else {
            console.log("saterday");
        }
    },

    /**
    * @author: Rahul Ranjan
    * @purpose: This function is use to find the Change/variable form the given amount !!.
    *  @Since: 25-sep-2019
    * @param {User entered amount into the vending machine} amountInpit
    */
    vendingMachine(amountInpit) {
        var TotalAmount = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        var count = [TotalAmount.length];
        count[0] = Math.floor(n / TotalAmount[0]);
        n = (n % TotalAmount[0]);
        count[1] = Math.floor(n / TotalAmount[1]);
        n = n % TotalAmount[1];
        count[2] = Math.floor(n / TotalAmount[2]);
        n = n % TotalAmount[2];
        count[3] = Math.floor(n / TotalAmount[3]);
        n = n % TotalAmount[3];
        count[4] = Math.floor(n / TotalAmount[4]);
        n = n % TotalAmount[4];
        count[5] = Math.floor(n / TotalAmount[5]);
        n = n % TotalAmount[5];
        count[6] = Math.floor(n / TotalAmount[6]);
        n = n % TotalAmount[6];
        count[7] = Math.floor(n / TotalAmount[7]);
        n = n % TotalAmount[7];
        count[8] = Math.floor(n / TotalAmount[8]);
        n = n % TotalAmount[8];
        count[9] = Math.floor(n / TotalAmount[9]);
        n = n % TotalAmount[9];
        count[10] = Math.floor(n / TotalAmount[10]);
        n = n % TotalAmount[10];
        for (var i = 0; i < count.length; i++) {
            console.log(TotalAmount[i] + "--Notes :   " + count[i]);
        }
    },

    /**
    * @author: Rahul Ranjan
    * @purpose: This function is use to change the temp conversion.
    *  @Since: 25-sep-2019
    * @param {User entered input in the form of celsius} celsius
    * @param {User entered input in the form of fahrenheit} fahrenheit
    */
    tempConversion(celsius, fahrenheit) {
        var celsius_To_fahrenheit;
        var fahrenheit_To_celsius;
        celsius_To_fahrenheit = (celsius * (9 / 5)) + 32;
        console.log(celsius + "--celsius_To_fahrenheit-->" + celsius_To_fahrenheit);

        fahrenheit_To_celsius = (fahrenheit - 32) * (5 / 9);
        console.log(fahrenheit + "--fahrenheit_To_celsius-->" + fahrenheit_To_celsius);
    },

    /**
    * @author: Rahul Ranjan
    * @purpose: This function is use to find monthly Payment.
    *  @Since: 25-sep-2019
    * @param {User entered input in the form of year} y
    * @param {User entered input in the form of rate} R
    * @param {User entered input in the form of Principal amount} p
    */
    monthlyPament(y, R, p) {
        var n = Math.floor(12 * y);
        var r = Math.floor(R / (12 * 100));
        var payment = Math.floor((p * r) / 1 - Math.pow((1 + r), (-n)));
        console.log("Monthly payment--" + payment);
    },
    
    /**
     * @author: Rahul Ranjan
     * @purpose: Write a static function sqrt  to compute the square root of a nonnegative number c given in
         the input using Newton's method.
     *  @Since: 25-sep-2019
     * @param {User entered input in the form of c} c
     */
    sqrt(c) {
        var t = c;
        var epsilon = 1e-15;
        while (Math.abs(t - c / t) > epsilon * t) {
            t = (c / t + t) / 2;
        }
        console.log(t);
    },

    /**@author: Rahul Ranjan
      * @purpose: This function is use to sort array using insertion sort for integer!! 
      * @Since: 25-sep-2019
      * @param {UnSorted Array} array 
      */
    mergeSort(array) {
        if (array >= 1) {
            return array;
        }
        const middile = (Math.floor(array.length) / 2);
        const left = array.slice(0, middile);
        const right = array.slice(middile);
        return merge(this.mergeSort(left), this.mergeSort(right));
    },
}


