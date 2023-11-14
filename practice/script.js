const express = require('express');
const app = express();

var counter = 0;
app.use(function(req,res,next){
    counter += 1;
    console.log("middleware working fine!" + counter);
    next();
})

app.get("/",function(req,res){
    res.send("Hello dude")
})
app.get("/profile",function(req,res){
    res.send("Hello arun")
})

app.listen(4000)