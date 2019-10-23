const mongoose =reqyure('mongoose');
var schema = mongoose.Schema;
const chatUserData = new schema({
    sender :{
    type : String,
    require : true
    },
    receiver : {
        type : String,
        require : true
    },
    message : {
        type : String,
        require : true
    }
})
const chatRegister = mongoose.model('chat', chatUserData);
exports.addMessage=(req, callback)=>{
console.log("model is working properly !!");
var msg = new chatRegister({
    "sender" : req.body.sender,
    "receiver" : req.body.receiver,
    "message" : req.body.message
})
msg.save((err, result)=>{
    if(err){
        callback(err)
    }else{
        callback(result)
    }
})
}
exports.getUserMessage=(req, callback)=>{
chatRegister.fiind({}, (err, result)=>{
    if(err){
        callback(err)
    }else{
        callback(result)
    }
})
}