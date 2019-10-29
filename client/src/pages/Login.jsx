import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import controller from '../controllers/userController';
export default class login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            snackbarOpen: false,
            snackbarMsg: ""
        };
    }
    snackbarClose = (e) => {
        this.setState({ snackbarOpen: false })
    }
    handleSignIn = () => {
        console.log(this.state.email.length);
        console.log(this.state.password);
        if (this.state.email === "") {
            this.setState({ snackbarOpen: true, snackbarMsg: "email cannot be empty" })
        } else if (this.state.password === null || this.state.password.length < 8) {
            this.setState({ snackbarOpen: true, snackbarMsg: "password should be minimum 8 character" })
        } else {
            controller.login(this.state.email, this.state.password).then((res) => {
                // console.log("login", res);
                localStorage.setItem('email', this.state.email,res.id)
                this.props.history.push('/dashboard')
            }).catch(err => {
                console.log("err in login component ", err);
            })
            this.setState({ snackbarOpen: true, snackbarMsg: "Login successfully!!" })
        }
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
    // handleSignIn = () => {
    //     console.log("Entered in handle sign in");


    // }
    handleRegister = () => {
        this.props.history.push('/registration')
    }
    handleForgot = () => {
        this.props.history.push('/forgot')
    }
    handleClose=()=>{
        this.setState({
            snackbarOpen:!this.state.snackbarOpen,
            snackbarMsg:''
        })
    }
    render() {
        return (
            <div className="login-container">

                <Card className="login-card">
                    <div className="login-contents">
                        <div className="avatar">
                            <LockOutlinedIcon />
                        </div>
                        <div>
                            {/* <div className="heading">Login</div> */}
                            <div style={{ color: "red", fontSize: 15 }}>ChatApp Login</div>
                        </div>
                        <div>
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                variant="outlined"
                                className="text-Field"
                                fullWidth
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
                                className="text-Field"
                                fullWidth
                                value={this.state.password}
                                onChange={this.handlePassword}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                        </div>

                        <div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit-box"
                                onClick={this.handleSignIn}
                            >
                                SignIn
                             </Button>
                            <div>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2" onClick={this.handleRegister}>
                                            Don't have an account Sign Up
                                  </Link>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2" onClick={this.handleForgot}>
                                            Forgot password
                                  </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </Card>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.snackbarOpen}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message={<span id="message-id">{this.state.snackbarMsg}</span>}
                    action={[
                        <IconButton
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </div>

        );
    }
}