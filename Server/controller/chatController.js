/**
* @Execution : 1. default node cmd> node .js
* @Purpose : create chat controller 
* @file : chatController.js
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 10-10-2019
*/
const chatServices = require('../services/chatServices')
exports.getUsersMsg = (req, res) => {
    try {
        chatServices.getUsersMsg(req, (err, data) => {
            if (err) {
                console.log("err", err);
                res.status(404).send(err)
            } else {
                console.log("response", data);
                res.status(200).send(data)
            }
        })

    } catch (error) {
        console.log("error", error);
    }
}
exports.addMsg = (req, callback) => {
    try {
        chatServices.addMsg(req, (err, data) => {
            if (err) {
                console.log("err", err);
                callback(err);
            } else {
                console.log("yes enterd in succes controller",data);
                callback(null,data) 
            }
        })
    } catch (error) {
        console.log("error", error);
    }
}