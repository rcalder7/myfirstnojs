var express = require("express");
var app = express();


app.get("/results", function(req,res){
   res.send("hello it works");
   
    
});


app.listen(process.env.PORT,process.env.IP, function(){
    
    console.log("Movie App  has started!!")
    
    
})