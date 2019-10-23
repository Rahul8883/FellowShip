import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
import { withRouter } from 'react-router-dom';
import controller from "../controllers/userController";
class registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
             lastName:'',
            email : '',
            password : ''
        };
    }
    handleFirstName=(event)=>{
        console.log("-------------->event");
        const firstName = event.target.value;
        console.log("it work ! you clicked.." + firstName);
        this.setState({
            firstName : firstName
        })
    }
    handleLastName = (event) => {
        console.log("-------------->event");
        const lastName = event.target.value;
        console.log("it works ! you clicked.. "+ lastName)
        this.setState({
            lastName : lastName
        })
    }
    handleEmail=(event)=>{
        console.log("-------------->event");
        const email = event.target.value;
        console.log("it works ! you clicked.. " + email);
        this.setState({
            email : email
        })
    }
    handlePassword = (event) => {
        console.log("-------------->event");
        const password = event.target.value;
        console.log("it works ! you clicked.. " + password)
        this.setState({
            password : password
        })
    }
    handleRegister =()=>{
        controller.register(this.state.firstName, this.state.lastName, this.state.email, this.state.password)
        .then((res)=>{
            console.log("Registered", res);
        }).catch(error=>{
            console.log("Error occur in registration..",error);
            
        })
    }
    render() {
        return (
            <div className="registration-container">
                <Card className="registration-card">
                    <div className="registration-contents">
                        <div className="heading">Registration</div>
                        <div>
                            <TextField className="registration_Padding"
                                label="firstName"
                                type="firstName"
                                name="firstName"
                                placeholder="firstName"
                                variant="outlined"
                                onChange={this.handleFirstName}
                                value={this.state.firstName}
                            
                            />
                        </div>
                         <div>
                            <TextField
                                label="lastName"
                                type="lastName"
                                name="lastName"
                                placeholder="lastName"
                                variant="outlined"
                                onChange={this.handleLastName}
                                value={this.state.lastName}
                            />
                        </div> 
                        <div>
                            <TextField
                                label="Email"
                                type="Email"
                                name="Email"
                                placeholder="Email"
                                variant="outlined"
                                onChange={this.handleEmail}
                                value={this.state.email}
                            />
                        </div> 
                        <div>
                            <TextField
                                label="password"
                                type="password"
                                name="password"
                                placeholder="password"
                                variant="outlined"
                                onChange={this.handlePassword}
                                value={this.state.password}
                            />
                        </div> 
                    </div>
                    <div>
                        <Button color="primary" onClick={this.handleRegister}>SignUp</Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withRouter(registration);