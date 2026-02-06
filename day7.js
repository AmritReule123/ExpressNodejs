const express = require("express");
const app = express();

app.get("/", (req,res) =>{
    res.json({
        name: "reule",
        address: "rtt",
        age: 2121 
    })
})


app.get("/about", (req,res) =>{
    res.json({
        class: "code",
        address: "lalitpur",
        email: "@gmail.com"
    })
})


app.post("/abouts", (req,res) =>{
    res.json({
        class: "changeer",
        address: "sanepa",
        email: "@ram.com"
    })
})


app.get("/test", (req,res)=>{
    res.json({
        come: "documentation free create garnu pardaina",
        rum: "auto save hunxa tesa maa collection create matra garnee ho"
    })
})


app.listen(2014, () => console.log("i am a running java script language"))