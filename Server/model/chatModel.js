/**
* @Execution : 1. default node cmd> node .js
* @Purpose : create chatModel 
* @file : chatModel.js
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 10-10-2019
*/
const mongoose =require('mongoose');
var schema = mongoose.Schema;
const chatUserData = new schema({
    'sender' :{
    type : String,
    require : true
    },
    'receiver' : {
        type : String,
        require : true
    },
    'message' : {
        type : String,
        require : true
    }
})
const chatRegister = mongoose.model('chat', chatUserData);
exports.addMessage=(req, callback)=>{
console.log("model is working properly !!",req.sender);
var msg = new chatRegister({
    "sender" : req.sender,
    "receiver" : req.receiver,
    "message" : req.message
})
msg.save((err, result)=>{
    if(err){
        callback(err)
    }else{
        console.log("yes enterd in succfess chat");
        
        callback(null,result)
    }
})
}
exports.getUserMessage=(req, callback)=>{
chatRegister.find({}, (err, result)=>{
    if(err){
        callback(err)
    }else{
        callback(null,result)
    }
})
}