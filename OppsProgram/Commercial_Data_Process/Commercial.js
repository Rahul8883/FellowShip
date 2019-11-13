/**
* Execution : 1. default node cmd> node .js
* @Purpose :commercial detail
* @file : Commercial.js
* @module : Object oriented program
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 22-10-2019
*/
var readline=require('readline-sync');
var buyData=readline.question("Enter the ShareNumber: ")
var sellData=readline.question("Enter the shareNumber for sell")
class commercial{
        constructor(AccountName, ShareNumber, StockPrice) {
            this.AccountName = AccountName;
            this.ShareNumber = ShareNumber;
            this.StockPrice = StockPrice;
        }
        buy(buydata) {
            return this.ShareNumber += this.buydata;
        }
        sell(){
            return this.ShareNumber=this.ShareNumber-sellData;
        }
    }
    module.exports=commercial;