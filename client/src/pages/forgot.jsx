import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
import controller from '../controllers/userController'
export default class forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email :''
        };
    }
    handlerEmail=(event)=>{
        console.log("------------->event");
        const email =event.target.value; 
        console.log("it work ! you clicked.." + email);
        this.setState({
            email : email
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
    render() {
        return (
            <div className="forgot-container">
                <Card className="forgot-card">
                    <div>
                        <div>
                        <TextField
                            label="forgot"
                            type="forgot"
                            name="forgot"
                            placeholder="forgot"
                            variant="outlined"
                           onChange= {this.handlerEmail}
                           value={this.state.email}
                        />
                        </div>
                        <div>
                            <Button color="primary" onClick={this.handleForgot}>submit</Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}