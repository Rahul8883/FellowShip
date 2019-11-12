/**
* @Execution : 1. default node cmd> node .js
* @Purpose : create user controller 
* @file : userController.js
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 10-10-2019
*/
const userService = require('../services/userServices');
const token = require('../token');
const mailer = require('../middleware/nodeMailer')
exports.SignUp = (req, res) => {
    try {
        req.checkBody('firstName', 'firstName is invalid').notEmpty()
        req.checkBody('email', 'email is required').notEmpty();
        req.checkBody('password', 'password is required').notEmpty().len(8, 13);
        req.checkBody('lastName', 'lastName is invalid').notEmpty().isAlpha();
        // req.checkBody('email', 'email is invalid ').isEmail();
        // req.checkBody('password', 'password is invalid').notEmpty().len(8, 13);
        var error = req.validationErrors();
        var response = {};
        if (error) {
            response.error = error;
            response.success = false;
            return res.status(422).send(response);
            console.log(error);
        } else {
            console.log("Controller Users ", req.body);
            userService.register(req, (err, data) => {
                if (err) {
                    console.log("err", err);
                    res.status(404).send(err)
                } else {
                    res.status(200).send("Registered Successfully");
                }
            })
        }
    } catch (error) {
        console.log("error", error);
    }
}
exports.login = (req, res) => {
    try {
        req.checkBody('email', 'email is invalid ').isEmail();
        req.checkBody('password', 'password is invalid').notEmpty().len(8, 13);
        var error = req.validationErrors();
        var response = {};
        if (error) {
            response.error = error;
            response.success = false;
            return res.status(422).send(response);
        } else {
            console.log("Controller login ", req.body);
            userService.login(req, (err, data) => {
                // console.log("id------------>",req);
                
                if (err) {
                    console.log("err", err);
                    res.status(404).send(err)
                } else {
                    res.status(200).send(data);
                }
            })
        }
    } catch (error) {
        console.log("error", error);
    }
}
exports.forgot = (req, res) => {
    try {
        req.checkBody('email', 'email is invalid ').isEmail();
        var error = req.validationErrors();
        var response = {};
        if (error) {
            response.error = error;
            response.success = false;
            return res.status(422).send(response);
            console.log(error);
        } else {
            console.log("Controller login ", req.body);
            userService.forgot(req, (err, data) => {
                console.log("data login------>",data);
                
                if (err) {
                    console.log("err", err);
                    res.status(404).send(err)
                } else {
                    console.log("result in forgot ", data);
                    console.log('after token generation', token.generateToken(data.id));
                    const generatedToken = token.generateToken(data.id);
                    const url = 'http://localhost:4000/reset' + generatedToken;
                    mailer.sendMail(data.email, url)
                    res.status(200).send(url)
                }
            })
        }
    } catch (error) {
        console.log("error", error);
    }
}
exports.reset = (req, res) => {
    try {
        req.checkBody('password', 'password is invalid').notEmpty().len(8, 13);
        req.checkBody('conformPassword', 'conformPassword is invalid')
        var error = req.validationErrors();
        var response = {};
        if (error) {
            response.error = error;
            response.success = false;
            return res.status(422).send(response);
            console.log(error);
        } else {
            console.log("Controller login ", req.body);
            userService.reset(req, (err, data) => {
                if (err) {
                    console.log("err", err);
                    res.status(404).send(err)
                } else {
                    res.status(200).send(data)
                }
            })
        }
    } catch (error) {
        console.log("error", error);
    }
}
exports.getUsers = (req, res) => {
    try {
        userService.getUsers(req, (err, data) => {
            if (err) {
                console.log("err", err);
                res.status(404).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    } catch (error) {
        console.log("error", error);
    }
}

