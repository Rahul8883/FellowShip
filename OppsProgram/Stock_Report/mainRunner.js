 /**
    * @Auther: Rahul Ranjan
    * @purpose: Write a program to read in Stock Names, Number of Share, Share Price.
    *           Print a Stock Report with total value of each Stock and the total value of Stock.
    * @Since: 08-oct-2019
    */
var StockReport = require('../Stock_Report/StockClass');
var fs = require('fs');
var content = fs.readFileSync('Stock.json', 'utf-8')
var obj = JSON.parse(content);
console.log('====================================');
console.log("Resultant of Stock report");
console.log('====================================');
var len = obj.Stock.length;
for (var i = 0; i < len; i++) {
    var Stock_Name = obj.Stock[i].Stock_Name;
    var Number_Of_share = obj.Stock[i].Number_Of_share;
    var share_Price = obj.Stock[i].share_Price;
    var company = new StockReport(Stock_Name, Number_Of_share, share_Price);
    var total = company.total();
    console.log("Name : " + Stock_Name + " , " + "Weight : " + Number_Of_share + " , " + "price : " + share_Price);
    console.log("Total price of rice is =" + total)
}