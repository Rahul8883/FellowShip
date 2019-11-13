/**
    * @Auther: Rahul Ranjan
    * @purpose: Facade Design pattern 
    * @Since: 09-oct-2019
    */
var Mortgage = function (name) {
    this.name = name;
}

Mortgage.prototype = {
    applyFor: function(amount){
        //accessing the multiple subsystem..
        var result ="approved"
        if(!new Bank().verify(this.name,amount)){
            return result="denied"
        }else if(!new Credit().get(this.name)){
            return result="denied"
        }else if(!new Background().check(this.name)){
            return result="denied"
        }
        return this.name+" has been "+result+" for a "+amount+" mortagage";
    }
}

var Bank=function(){
    this.verify=function(name, amount){
        return true;
    }
}

var Credit=function(){
    this.get=function(name){
        return true;
    }
}

var Background=function(){
    this.check=function(name){
        return true;
    }
}

function run(){
    var mortgage= new Mortgage("Rahul Ranjan");
    var result=mortgage.applyFor("$50000")
    console.log(result);
}

run();