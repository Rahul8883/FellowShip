/**
* @Execution : 1. default node cmd> node .js
* @Purpose : create dashboard 
* @file : Dashboard.jsx
* @author : Rahul Ranjan
* @version : 1.0.0
* @since : 20-10-2019
*/
import React from 'react';
import { Card, MenuItem, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import io from 'socket.io-client';
import controller from '../controllers/userController';
const socket = io.connect('http://localhost:4000');

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            allMsg: [],
            receiver: '',
            sender: '',
            message: ''
        }
    }
    componentDidMount() {
        try {
            this.setState({
                sender: localStorage.getItem('email')
            })
            this.getAllMessages();
            controller.getUsers().then((res) => {
                console.log("Response after hitting get users api is ", res.data);
                this.setState({
                    allUsers: res.data
                })
            }).catch(err => {
                console.log("Error after hitting get all user api", err);
            })

        } catch (err) {
            console.log("Err in dashboard", err);
        }
    }
    getAllMessages = () => {
        controller.getAllMsg().then((res) => {
            console.log("response after hitting get all messages", res);
            this.setState({
                allMsg: res.data
            })
            console.log("all msg in getall messages", this.state.allMsg);

        }).catch(err => {
            console.log("Err in hitting all messages ", err);

        })
    }
    handleMenu = async (e) => {
        await this.setState({
            receiver: e.target.textContent
        })
        this.getAllMessages()
        console.log("this.staet.receiver", this.state.receiver);

    }
    handleMenu1 = (e) => {
        this.setState({
            receiver: e.target.textContent
        })
    }
    handleSubmit = () => {
        var data = {
            "sender": this.state.sender,
            "receiver": this.state.receiver,
            "message": this.state.message
        }
        this.setState({
            message: ''
        })
        console.log("data after everything submitted", data);

        socket.emit('messageDetails', data);
        this.getAllMessages()
    }
    handleMessageInput = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    handlerLogout = () => {
        this.props.history.push('/login')
    }
    render() {
        return (
            <div className="container">
                <Card class className="WholeDashboad">
                    <div className="header">
                        <div>
                            <span style={{ fontFamily: "TimesNewRoman", fontSize: "50px" }}>ChatApp Dashboard</span>
                        </div>
                        <div className="header-details">
                            {localStorage.getItem('email')}
                            <Button onClick={this.handlerLogout} >Logout</Button>
                        </div>
                    </div>
                    <div className="dashboard-card1">
                        <Card className="users-card">
                            {
                                this.state.allUsers.map(key => {
                                    return (
                                        key.email !== this.state.sender ?
                                            <MenuItem onClick={this.handleMenu}>
                                                {key.email}
                                            </MenuItem> : (null)

                                    )
                                })
                            }
                        </Card>
                        <Card className="chat-card">
                            {
                                this.state.allMsg.map(key => {
                                    return (
                                        this.state.sender === key.sender && this.state.receiver === key.receiver ?
                                            this.state.sender === key.sender ?
                                                <div className="sender-css">
                                                    <text style={{ marginLeft: 10 }}>Sender :-  </text>
                                                    <div>
                                                        {key.message}
                                                    </div>
                                                </div> : (null) :
                                            key.receiver === this.state.receiver ?
                                                <div className="receiver-css">
                                                    <text>Receiver :-</text>
                                                    {key.message}
                                                </div> : (null)
                                    )
                                })
                            }
                            {
                                this.state.allMsg.map(key => {
                                    return (
                                        this.state.sender === key.receiver && this.state.receiver === key.sender ?
                                            this.state.sender === key.receiver ?
                                                <div className="reciver-css">
                                                    <text>receiver :-</text>
                                                    <div>
                                                        {key.message}
                                                    </div>
                                                </div> : (null) :
                                            key.sender === this.state.receiver ?
                                                <div className="sender-css">
                                                    <text>sender :-</text>
                                                    {key.message}
                                                </div> : (null)
                                    )
                                })
                            }


                        </Card>
                    </div>
                    <div>
                        <TextField
                            label="Message"
                            type="Message"
                            name="Message"
                            fullWidth
                            placeholder="Message"
                            variant="outlined"
                            value={this.state.message}
                            onChange={this.handleMessageInput}
                        />
                    </div>
                    <div className="dashboard-button">
                        <Button onClick={this.handleSubmit} color="primary" variant="contained" >Send</Button>
                    </div>
                </Card>
            </div >

        )
    }
}