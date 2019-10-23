const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
mongoose.set({useUnifiedTopology: true, useNewUrlParser: true})
const schema = mongoose.Schema;
const userScherma = new schema({
    'firstName': {
        type: String,
        required: true
    },
    'lastName': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true
    },
    'password': {
        type: String,
        required: true
    }
})
const user = mongoose.model('user', userScherma);

exports.register = (req, callback) => {
    console.log("Entered in user modell", req.body);
    try {
        user.findOne({
            "email": req.body.email
        }, (err, data) => {
            if (data) callback("user exits");
            else {
                /*10- is the no of salting round.
                     with that we make sure our password can't be looked up in dictionary table !!*/
                bcrypt.hash(req.body.password, 10, (err, encrypted) => {
                    var userDetails = new user({
                        "firstName": req.body.firstName,
                        "lastName": req.body.lastName,
                        "email": req.body.email,
                        "password": encrypted
                    })
                    userDetails.save((err, data) => {
                        if (err) {
                            callback(err);
                        } else {
                            console.log("data in user save", data);
                            callback(null, data);
                        }
                    })
                })
            }
        })
    } catch (e) {
        console.log(e);
    }
}
exports.login = (req, callback) => {
    console.log("Entered in user modell", req.body);
    try {
        user.findOne({
            "email": req.body.email
        }, (err, result) => {
            if (err) {
                callback(err);
            } else {
                console.log("data in login result ", result);
                bcrypt.compare(req.body.password, result.password, (err, data) => {
                    if (data) {
                        console.log("data in succesful login", data);
                        callback(null, data)
                    } else {
                        callback("login unsuccessful")
                    }
                })
            }
        })
    } catch (e) {
        console.log(e);
    }
}
exports.forgot = (req, callback) => {
    console.log("Entered in user model forgot", req.body);
    try {
        user.findOne({
            "email": req.body.email
        }, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result)
            }
        })
    } catch (e) {
        console.log(e);
    }
}
exports.reset = (req, callback) => {
    console.log("Entered in reset model", req.body);
    try {
        bcrypt.hash(req.body.password, 10, (err, encrypted) => {
            if (err) {
                callback(err)
            } else {
                console.log("req.decoded token in model", req.decoded.decoded);
                console.log("encrypted password", encrypted);
                user.updateOne({ '_id': req.decoded.decoded }, { 'password': encrypted },
                    (err, result) => {
                        if (err) {
                            callback(err)
                        } else {
                            console.log("Entered");

                            callback(null, result)
                        }
                    })
            }
        })
    } catch (e) {
        console.log(e);
    }
}
exports.getUsers = (req, callback) => {
    try {
        user.find({}, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result)
            }
        })
    } catch (e) {
        console.log(e);
    }
}