// const express = require("express");
//  const app = express();


//  app.get("/", (req,res)=>{
//     res.send("mo tw first home page maa xu!");

//  })


//  app.get("/about", (req,res)=>{
//     res.send("mo tw about page maa xu!");
//  })


//  app.get("/contact", (req,res)=>{
//     res.send("mo tw total change conatact page ma xu!");
//  })

//  app.listen(3131, () =>{
//     console.log("mo tw running port maa xu 3131!")
//  })



const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.json({
        name: "hari lal",
        address: "bkt",
        age: 22
    

    })
});


app.get("/server", (req ,res) =>{
    res.json({
        company: "Ethical Guider", 
        product: "hacking Tools",
        established: 2025
    })
});


app.post("/servers", (req, res) =>{
    res.json({
        email: "hari@gmail.com",
        phone: 112111,
        rollno: 21

    })
})


app.get("/profile", (req, res) =>{
    res.json({
       name : "image",
       size: 21,
       type: "jpg"
    })
})


app.get("/signup", (req, res) =>{
    res.json({
       company: "Nepal Software",
        product: "software",
        location: "koteshowr" 
    })
})


app.listen(2323, () =>{
    console.log("this json tag are only used in nodejs")
});