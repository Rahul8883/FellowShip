import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    handleEmail = (event) => {
        console.log("------------->event");
        const email = event.target.value;
        console.log("It works ! you clicked.. " + email)
        this.setState({
            email: email
        })
    }
    handlePassword = (event) => {
        console.log("-------------->event");
        const password = event.target.value;
        console.log("it works ! you clicked.. "+ password)
        this.setState({
            password : password
        })
    }
    render() {
        return (
            <div className="login-container">
                <Card className="login-card">
                    <div>
                        <div>
                            <div className="heading">Login</div>
                        </div>
                        <div>
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                variant="outlined"
                                value={this.state.email}
                                onChange={this.handleEmail}
                            />
                        </div>
                        <div>
                            <TextField
                                label="password"
                                type="password"
                                name="password"
                                placeholder="password"
                                variant="outlined"
                                value={this.state.password}
                                onChange={this.handlePassword}
                            />
                        </div>
                        <div>
                            <Button color="primary">SignUp</Button>
                            <Button color="primary">SignIn</Button>
                        </div>
                        <div>
                            <Button color="primary">forgot</Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

