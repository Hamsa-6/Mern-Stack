//main.js
var express = require("express");
var app=express();
app.use(express.json());
app.get("/myname",(req,res)=>{
    res.json({"msg":"Hamsa"});
});
app.post("/s",(req,res)=>{
    res.json({"name":"Hamsa Saravanan"});
})
app.post("/login",(req,res)=>{
    let {email,pwd}=req['query'];
    if(email == 'admin@gmail.com' && pwd =='admin'){
        res.json({"msg":"Correct"});
    }else{
        res.json({"msg":"wrong"});
    }
})

app.post("/register",(req,res)=>{
    let {name,email,password,address}=req.body;
    if (name ==""){
        res.json({"name":"please enter a name "})
    }
    else if(email == ''){
        res.json({"msg":"enter a email"});
    }else if (password ==''){
        res.json({"msg":"Enter a correct password"});
    }
    else if (address == ''){
        res.json({"msg":"fill the correct address"});
    }
    else{
        res.json({"msg":"success"});
    }    
    console.log(name,email,password,address);    
 });


app.listen(8080,()=>{
    console.log("server started");
});