var Commer=require('../Commercial_Data_Process/Commercial')
var readline = require('readline-sync');
var fs = require('fs');
var content = fs.readFileSync('ComerPackage.json', 'utf-8');
//console.log(content);
var obj = JSON.parse(content);
var len = obj.AccountList.length;
//console.log(len);
    var array = [];
    for(var i=0; i<len; i++){
        var AccountName = obj.AccountList[i].AccountName;
        var ShareNumber = obj.AccountList[i].ShareNumber;   
        var StockPrice = obj.AccountList[i].StockPrice;
        var company = new Commer(AccountName, ShareNumber, StockPrice);
        var total = company.buy();
        console.log("AccountName : " + AccountName + " , " + "ShareNumber : " + ShareNumber + " , " + "StockPrice : " + StockPrice);
        console.log("Total price of rice is =" + total)
        let data = {
            "Account_name": AccountName,
            "Share_Number": ShareNumber,
            "Stock_Price": StockPrice
        }
        array.push(data);

        console.log("inventoryArray", array);
        let value = JSON.stringify(array);
        fs.writeFileSync('_OutPut.json', value);
    }
   