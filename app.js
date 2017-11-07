var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var config = require("./config/database");

//Pot number
const port = 3000;

const app = express();

//Start Server
app.listen(port, function() {
    console.log("Server is running on port : "+port);
});

//Connnecttion to database
mongoose.connect(config.database);

//On connection
mongoose.connection.on("connected", ()=> {
    console.log("Connected to the  database "+config.database);
});

//On error
mongoose.connection.on("error", (err)=>{
    console.log("Database error"+err);
});