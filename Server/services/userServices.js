const modelAccess = require('../model/userModel');
exports.register = (req, callback) => {
    try {
        console.log("data in services", req.body);
        modelAccess.register(req, (err, data) => {
            if (err) {
                callback(err);
            } else {
                console.log("Entered success services");
                callback(null, data);
            }
        })
    } catch (e) {
        console.log(e);
    }
}
exports.login = (req, callback) => {
    try {
        console.log("data in login", req.body);
        modelAccess.login(req, (err, data) => {
            if (err) {
                callback(err);
            } else {
                console.log("Entered login services");
                callback(null, data);
            }
        })
    } catch (e) {
        console.log(e);
    }
}
exports.forgot = (req, callback) => {
    try {
        console.log("data in login", req.body);
        modelAccess.forgot(req, (err, data) => {
            if (err) {
                callback(err);
            } else {
                console.log("Entered login services");
                callback(null, data);
            }
        })
    } catch (e) {
        console.log(e);
    }
}
exports.reset = (req, callback) => {
    try {
        console.log("data in services reset", req.body);
        modelAccess.reset(req, (err, data) => {
            if (err) {
                callback(err);
            } else {
                console.log("Entered reset services");
                callback(null, data);
            }
        })
    } catch (e) {
        console.log(e);
    }npm 
}