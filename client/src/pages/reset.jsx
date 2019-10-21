import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
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
    render() {
        return (
            <div className="reset-container">
                <Card className="reset-card">
                    <div>
                        <div>
                        <TextField
                            label="password"
                            type="password"
                            name="password"
                            placeholder="password"
                            variant="outlined"
                            onChange={this.handlerPassword}
                            value=
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
                            <Button color="primary">Submit</Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

