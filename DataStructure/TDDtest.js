/**
 * @purpose:TDD-Designing and Developing tests for password length functionality of a program
 */
var Assert = require('assert')
class Passwordvalidator {
    constructor() {
        this.password = this.password
    }
    isvalid(password) {
        if (password.length >= 5 && password.length <= 10) {
            return true
        }
        else
            return false
    }
}
let pv = new Passwordvalidator()
Assert.equal("true", pv.isvalid("abc123"));
Assert.equal("true", pv.isvalid("abc")); 