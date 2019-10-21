const dbConn = require('../Server/configuration/dbConfig')
const routes = require('../Server/routes/userRoutes');
const mongoose = require('mongoose');
var expressValidator = require('express-validator');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); // Add this after the bodyParser middlewares!
app.use('/', routes)
mongoose.connect(dbConn.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => { console.log("connected to the database successfully") })
    .catch(() => { console.log("Erro in connecting to the database") })
app.listen(4000, () => {
    console.log("Served listening on port 4000");
});