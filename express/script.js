const express = require("express");
const app = express();

// middleware setup
let counter = 0;
app.use(function(req, res, next){
  counter += 1;
  console.log("middleware" + "  "+ counter)
  next();
})
app.get("/",function(req, res){
  res.send("Hello client, you are now at homepage.")
});

app.get("/profile",function(req,res){
  res.send("Hello User")
})

app.listen(5500)