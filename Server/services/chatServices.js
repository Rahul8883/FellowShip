const modelChat = require('../model/chatModel')
exports.getUsersMsg = (req, callback) => {
    try {
        modelChat.getUserMessage(req, (err, data) => {
            if (err) {
                callback(err);
            } else {
                console.log("Entered user message");
                callback(null, data);
            }
        })
    } catch (e) {
        console.log(e);
    }
}
exports.addMsg = (req, callback) => {
    try {
        modelChat.addMessage(req, (err, data) => {
            if (err) {
                callback(err)
            } else {
                console.log("yes enterde in service chat");
                
                callback(null, data)
            }
        })
    }catch (e) {
        console.log(e);
    }
}