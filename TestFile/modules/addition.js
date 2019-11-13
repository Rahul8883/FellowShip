/**
* Execution : 1. default node cmd> node .js
* @Purpose : Test perform using chi and mocha in this buisness logic
* @file : addition.js
* @module : Testing 
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 15-10-2019
*/
let add = function (x, y) {
    console.log("value of x: " + x + " and value of y: " + y);
    return new promise(function (resolve, reject) {
        if (x < 0) {
            reject("x should be greater then 0")
        } else {
            resolve(x + y)
        }
    })
}
exports.add = add;
