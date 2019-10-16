const express = require('express');
const cors = require('cors');
require("./config/passport");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://varun:Mustang@cluster0-bhfp5.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true }, { useNewUrlParser: true });
const app = express();
const port = 8100;
client.connect(err => {
    const col = client.db("careers").collection('jobs');
    console.log("connect");
    if (err)
    return console.log(err);
     

    //routes
    app.use(cors());
    require('./routes')(app, col);
    app.listen(port, () => {
        console.log("Port 8100 running on browser...");
    });
});
