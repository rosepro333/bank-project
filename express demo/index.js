const express = require('express');

const app= express();


app.get('/',(req,res)=>{

    res.send("hello world")
})

app.get('/login',(req,res)=>{

    res.send("login page")
})

app.listen(8000);


console.log("hello");