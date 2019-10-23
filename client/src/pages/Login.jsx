import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
import controller from '../controllers/userController'
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
        this.setState({
            email: email
        })
    }
    handlePassword = (event) => {
        console.log("-------------->event");
        const password = event.target.value;
        this.setState({
            password: password
        })
    }
    handleSignIn = () => {
        console.log("Entered in handle sign in");
        controller.login(this.state.email, this.state.password).then((res) => {
            console.log("login", res);
            localStorage.setItem('email',this.state.email)
            this.props.history.push('/dashboard')
        }).catch(err => {
            console.log("err in login component ", err);
        })
    }
    render() {
        return (
            <div className="login-container">
                <Card className="login-card">
                    <div className="login-contents">
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
                            <Button color="primary" >SignUp</Button>
                            <Button color="primary" onClick={this.handleSignIn}>SignIn</Button>
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