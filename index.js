

const express = require("express");

const request = require("request");

const https = require("https");

const bodyparser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html")

// https.get(url, function(response){
//   console.log(response);
// });

});

app.listen(3000,function(){
  console.log("server is running on port 3000");
});
