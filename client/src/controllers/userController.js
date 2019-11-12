/**
* @Execution : 1. default node cmd> node .js
* @Purpose : create userController
* @file : userController.jsx
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 20-10-2019
*/
import authServices from '../services/userServices';
import axios from 'axios';
var controller = {
    register(firstName, lastName, email, password) {
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        return axios.post("http://localhost:4000/registration" , data)
            .then(response => {
                console.log("response :- " ,response);
               // response.status(200).send("register successfully")
            })
            .catch(error => {
                console.log("Registration Failed... ", error);
            })
    },

    login(email, password) {
        let data = {
            email: email,
            password: password
        }
        let headers={
            'Content-Type':'application/json8'
    
        }
        console.log("data in login", data);
        // return axios.post(authServices.login, data)
        return axios.post("http://localhost:4000/login"  , data)
            .then(response => {
                console.log("response :- ", response);
                return response;
                // response.status(200).send("register successfully")
            })
            .catch(error => {
                console.log("Login Failed... ", error);
            })
    },

    reset(password, confirmPassword) {
        let data = {
            password: password,
            confirmPassword: confirmPassword
        }
        return axios.post("http://localhost:4000/reset", data)
            .then(response => {
                console.log("response :- ", response);
              //  response.status(200).send("register successfully")
            })
            .catch(error => {
                console.log("reset password processing failed... " + error);
            })
    },

    forgot(email) {
        let data = {
            email: email
        }
        return axios.post("http://localhost:4000/forgot", data)
            .then(response => {
                console.log("response :- ", response);
                response.status(200).send("register successfully")
            })
            .catch(error => {
                console.log("Registration Failed... " + error);
            })
    },
    getUsers() {
        return axios.get("http://localhost:4000/getUsers")
            .then(response => {
                console.log("response :- ", response);
                return response
            })
            .catch(error => {
                console.log("get users Failed... " , error);
            })
    },

    getAllMsg() {
        return axios.get("http://localhost:4000/getUsersMsg")
            .then(response => {
                console.log("response :- ", response);
                return response
            })
            .catch(error => {
                console.log("get users Failed... " , error);
            })
    },
    
}


export default controller;