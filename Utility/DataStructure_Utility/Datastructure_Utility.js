const readline=require('readline-sync')
/**
 * @purpose:Take an Arithmetic Expression such as(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the
 * performance of operations. Ensure parentheses must appear in a balanced fashion.
 */
exports.balanceParentheses=()=>{
     function isbalance(str){
         let stack=[]
         for(let i=0;i<str.length;i++){
             
            if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
                stack.push(str[i]);
            }
         
         else if(str[i]==')'){
             if(stack.length==0 || stack.pop()!='('){
                 return false
             }
         }
         else if(str[i]==']'){
            if(stack.length==0 || stack.pop()!='['){
                return false
            }
        }
        else if(str[i]=='}'){
            if(stack.length==0 || stack.pop()!='{'){
                return false
            }
            
        } 

    }
        return stack.length==0;

    }
     console.log(isbalance("(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)"));
     
}

 /**
  * @purpose:   Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store
  *             the prime numbers in a 2D Array, the first dimension represents the range 0-100,
  *             100-200, and so on. While the second dimension represents the prime numbers in that range.
  */
exports.primeRange2D=()=>{
    function is2DPrime(n) {
    if (n == 0 || n == 1) {
        return false;
      }
      for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          return false;
        }
      }
      return true;
    }
    let a=[[]]
    let k = 0;
    for (let i = 0; i < 10; i++) {
        a[i]=[10]
      for (let j = 0; j < 100; j++) {
          a[i][j]=[10][100]
        if (is2DPrime(k)) {
          console.log("" + k);
          k++;
        } else {
          k++;
        }
      }
      console.log(" ");
        }
    }
  /**
   * @purpose:Write a program ​ Calendar.java that takes the month and year as command-line arguments 
   *          and prints the Calendar of the month. Store the Calendar in an 2D Array,the first dimension 
   *          the week of the month and the second dimension stores the day of the week. Print the result
   *          as following.
   */
  exports.calander=()=>{
    function day(month,day,year){
    let y = year - (14 - month) / 12;
    let x = y + y/4 - y/100 + y/400;
    let m = month + 12 * ((14 - month) / 12) - 2;
    let d = (day + x + (31*m)/12) % 7;
    return d;
    }
    function isLeapYear(year){
      if(year%4==0 && year%100!=0 || year%400==0)
      return true
      else
      return false
    }
    let month=readline.question("Enter the month")
    let year=readline.question("Enter the year")

    let months=[" ", "january", "february", "march", "april", "may", "june", "july", "august",
                  "september", "october", "november", "december"]
    let days=[0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(month==2 && isLeapYear(year))
        days[month]=29;
        
        console.log( " " + months[month] + " " + year);
        console.log("S M Tu W Th F S");
        let x=day(month,1,year)

        for(let i=0;i<x;i++){
          console.log(" ");
        }
          for(let i=1;i<days[month];i++){
            console.log('%d',i);
            if (((i + x) % 7 == 0) || (i == days[month]))
            console.log(" ")
            
          }
         
      }
  