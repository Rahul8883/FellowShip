const chatServices = require('../services/chatServices')
exports.getUsersMsg = (req, res) => {
    console.log('====================================');
    console.log("in con");
    console.log('====================================');
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
    console.log('====================================');
    console.log("in con");
    console.log('====================================');
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