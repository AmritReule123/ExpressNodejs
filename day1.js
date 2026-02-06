const express = require("express");
 const app = express();


 app.get("/", (req,res)=>{
    res.send("mo tw first home page maa xu!");

 })


 app.get("/about", (req,res)=>{
    res.send("mo tw about page maa xu!");
 })


 app.get("/contact", (req,res)=>{
    res.send("mo tw total change conatact page ma xu!");
 })

 app.listen(3131, () =>{
    console.log("mo tw running port maa xu 3131!")
 })