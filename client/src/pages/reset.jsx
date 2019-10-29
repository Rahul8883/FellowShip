import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
import controller from '../controllers/userController'

export default class reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password : '',
            confirmPasswsord : ''
        };
    }
    handlerPassword=(event)=>{
        console.log("-------------->event");
        const password = event.target.value;
        console.log("it works ! you clicked.. " + password);
        this.setState({
            password : password
        })
    }
    handlerConfirmPassword=(event)=>{
        console.log("-------------->event");
        const confirmPassword = event.target.value;
        console.log("it works ! you clicked.. " + confirmPassword);
        this.setState({
            confirmPassword : confirmPassword
        })
    }
    handleReset = () => {
        console.log("Entered in handle Reset in");
        controller.reset(this.state.password, this.state.confirmPassword).then((res) => {
            console.log("login", res);
        }).catch(err => {
            console.log("err in login component ", err);
        })
    }
    render() {
        return (
            <div className="reset-container">
                <Card className="reset-card">
                    <div className="reset-content">
                    <div>
                        <div>
                    <div >
                                <span   style={{ fontFamily: "TimesNewRoman", fontSize: "20px" }}>
                                    Reset password
                </span>
                            </div>
                        <div>
                        <TextField
                            label="password"
                            type="password"
                            name="password"
                            placeholder="password"
                            variant="outlined"
                            onChange={this.handlerPassword}
                        />
                        <TextField
                            label="comfirmPassword"
                            type="confirmPassword"
                            name="confirmPassword"
                            placeholder="confirmPassword"
                            variant="outlined"
                        />
                        </div>
                        <div>
                            <Button color="primary" onClick={this.handleReset}>Submit</Button>
                        </div>
                    </div>
                    </div>
                    </div>
                </Card>
            </div>
        );
    }
}

