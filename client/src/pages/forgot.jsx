import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
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
                            <Button color="primary">submit</Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

