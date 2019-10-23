/**
 * @description: server file
 * @filename: server.js
 */
const dbConn = require('../Server/configuration/dbConfig')
const routes = require('../Server/routes/userRoutes');
const mongoose = require('mongoose');
require('dotenv').config();
var expressValidator = require('express-validator');
const express = require('express');
const cors = require('cors');
const app = express();
var io = require('socket.io').listen(server);
app.use(express.static('public'));
io.on('connection', (socket)=>{
   socket.on('chat message', (msg)=>{
       io.emit('chat message', msg);
   });
});
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
var server=app.listen(4000, () => {
    console.log("Served listening on port 4000");
});