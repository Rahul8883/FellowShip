/**
    * @Auther: Rahul Ranjan
    * @purpose: Read in the following message: Hello <<name>>,
    *  We have your full name as <<full name>> in our system.
    *  your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification 
    * Thank you BridgeLabz 01/01/2016. Use Regex to replace name, full name, Mobile#, and 
    * Date with proper value.
    * @Since: 08-oct-2019
    */
var readsync = require('readline-sync');
var s1 = " Hello <<name>>, We have your full name as <<full name>> in our system.";
var str1=readsync.question("Enter the <<name>>")
var result1=s1.replace("<<name>>", str1);
var str=readsync.question("Enter the <<full name>>")
var final=result1.replace("<<full name>>", str)
console.log(final);
var s2 = "your contact number is 91-xxxxxxxxxx.";
var str2=readsync.question("Enter your mobile number")
var result2=s2.replace("xxxxxxxxxx", str2);
console.log(result2);
var s3 = "Please,let us know in case of any clarification Thank you BridgeLabz 00/00/0000.";
var str3=readsync.question("Enter your Date")
var result3=s3.replace("00/00/0000", str3);
console.log(result3);