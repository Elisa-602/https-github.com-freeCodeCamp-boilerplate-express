let express = require('express');
let app = express();

require('dotenv').config();

/*
Start a Working Express Server
app.get("/", function(req, res) {
  res.send("Hello Express");
});
*/

//Serve an HTML File
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

//Serve Static Assets
app.use("/public", express.static(__dirname + "/public"));

/*Serve JSON on a Specific Route
app.get("/json", function(req, res) {
  res.json({"message": "Hello json"})
})*/


//Use the .env File
/*app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"HELLO JSON"});
  }
  else {
    res.json({"Hello json"});
  }
})*/

var message= 'Hello json';
app.get("/json", (req, res) => {
  if ( process.env['MESSAGE_STYLE'] === "uppercase") {
      res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": messange });
  }
});

console.log("Hello World");








 module.exports = app;
