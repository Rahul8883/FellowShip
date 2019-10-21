// import React from "react";
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import MenuItem from '@material-ui/core/MenuItem';
// import { chatServices, userChatArray } from "../../Services/chatServices";
// import AppBar from '@material-ui/core/AppBar';
// import '../../scss/main.scss';

// import io from 'socket.io-client';
// const socket = io.connect('http://localhost:4000');
// export default class dashBoard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             onlineUser: [],
//             MsgArray: [],
//             message: "",
//             MsgDisplay: "",
//             Receiver: '',
//             Sender: '',
//             msg: [],
//         }
//     }
//     componentDidMount() {
       
//         chatServices()
//             .then((result) => {
//                 this.setState({
//                     onlineUser: result.data.result
//                 })
//                 console.log("users", result.data.result);
//             })
//             .catch((error) => {
//                 alert(error)
//             });
       
//         userChatArray()
//             .then((result) => {
//                 this.setState({
//                     MsgArray: result.data.result
//                 })
//                 console.log("chat history is :", this.state.MsgArray);
//             })
//             .catch((error) => {
//                 alert(error);
//             });
//         const Sender = localStorage.getItem('Sender');
//         socket.on(Sender, (res) => {
//             console.log("responce in dash board========>", res);
//             const msg = this.state.msg;
//             msg.push(res);
//             this.setState({ msg: msg });
//             console.log("this set msg====>", this.state.msg);
//         })
//     }
   
//     handleMessage = (e) => {
//         this.setState({ message: e.target.value });
//     }
   
//     handleSubmit = (event) => {
//         event.preventDefault();
        
//         const Sender = localStorage.getItem('Sender');
//         this.setState({ Sender: Sender })
//         console.log('Sender is :', Sender);
//         console.log("Selected receiver: ", this.state.Receiver);
//         //chatDisplay(Sender, this.state.Receiver, this.state.message);
//         const data = {
//             senderId: Sender,
//             recieverId: this.state.Receiver,
//             message: this.state.message,
//         }
//         socket.emit('new_msg', data);
//         this.setState({
//             message: '',
//             anchorEl: null
//         });
//     }
//     handleClick = (key, event) => {
//         this.setState({ anchorEl: null });
//         let Receiver = event.target.textContent;
//         this.setState({ Receiver: Receiver });
//     };