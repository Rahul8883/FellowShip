/**
 * @description: server file
 * @filename: server.js
 */
const dbConn = require('../Server/configuration/dbConfig')
const routes = require('../Server/routes/userRoutes');
const mongoose = require('mongoose');
const chatController = require('./controller/chatController')
require('dotenv').config();
var expressValidator = require('express-validator');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static('public'));
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); // Add this after the bodyParser middlewares!
app.use(cors())
app.use('/', routes)
mongoose.connect(dbConn.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => { console.log("connected to the database successfully") })
    .catch(() => { console.log("Erro in connecting to the database") })
const server = app.listen(4000, () => {
    console.log("Served listening on port 4000");
});
const io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    socket.on('messageDetails', function (req) {
        console.log("data in server js file", req);
        chatController.addMsg(req, (err, res) => {
            if (err) {
                console.log("err in adding message to the database", err);
            } else {
                console.log("response after adding message  to the database", res);
            }
        })
    })
})