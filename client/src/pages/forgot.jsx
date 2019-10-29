import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
import controller from '../controllers/userController';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
export default class forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }
    handlerEmail = (event) => {
        console.log("------------->event");
        const email = event.target.value;
        console.log("it work ! you clicked.." + email);
        this.setState({
            email: email
        })
    }

    handleForgot = () => {
        console.log("Entered in handle Reset in");
        controller.forgot(this.state.email).then((res) => {
            console.log("login", res);
        }).catch(err => {
            console.log("err in login component ", err);
        })
    }
    handleRegister = () => {
        this.props.history.push('/registration')
    }
    handleLogin = () => {
        this.props.history.push('/login')
    }
    render() {
        return (

            <div className="forgot-container">
                <Card className="forgot-card">
                    <div className="login-contents">

                        <div className="header-area">
                            <div >
                                <span   style={{ fontFamily: "TimesNewRoman", fontSize: "20px" }}>
                                    Forgot password
                </span>
                            </div>

                            <div>
                                <TextField
                                    label="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    variant="outlined"
                                    fullWidth
                                    onChange={this.handlerEmail}
                                    value={this.state.email}
                                />
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="submit-box"
                                    onClick={this.handleForgot}
                                >
                                    Send verification link
                             </Button>
                                <div>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2" onClick={this.handleLogin}>
                                                Back to login page
                                  </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2" onClick={this.handleRegister}>
                                                SignUp
                                  </Link>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            {/* <div>
                            <Button color="primary" onClick={this.handleForgot}>submit</Button>
                        </div> */}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}