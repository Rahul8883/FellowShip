import React from 'react';
import { Card, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import controller from '../controllers/userController';
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            allMsg: []
        }
    }
    componentDidMount() {
        try {
            controller.getUsers().then((res) => {
                console.log("Response after hitting get users api is ", res.data);
                this.setState({
                    allUsers: res.data
                })
                // controller.getAllMsg().then((res) => {
                //     console.log("Response after heating user api is ", res.data);
                //     this.setState({
                //         allMessg: res.data
                //     })
                // })
            }).catch(err => {
                console.log("Error after hitting get all user api", err);
            })
          
        } catch (err) {
            console.log("Err in dashboard", err);
        }
    }
    render() {
        return (
            <div className="container">
                <div className="dashboard-cards">
                    <Card className="users-card">
                        {
                            this.state.allUsers.map(key => {
                                return (
                                    <MenuItem>
                                        {key.email}
                                    </MenuItem>
                                )
                            })
                        }
                    </Card>
                    <Card className="chat-card">
                        {
                            this.state.allMsg.map(key => {
                                return (
                                    <MenuItem>
                                        {key.msg}
                                    </MenuItem>
                                )
                            })
                        }

                    </Card>
                </div>

                <div>
                    
                        <div>
                            <TextField
                                label="Message"
                                type="Message"
                                name="Message"
                                placeholder="Message"
                                variant="outlined"
                            />
                        </div>
                    
                </div>
            </div>
        )
    }
}