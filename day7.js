// const express = require("express");
// const app = express();

// app.get("/", (req,res) =>{
//     res.json({
//         name: "reule",
//         address: "rtt",
//         age: 2121 
//     })
// })


// app.get("/about", (req,res) =>{
//     res.json({
//         class: "code",
//         address: "lalitpur",
//         email: "@gmail.com"
//     })
// })


// app.post("/abouts", (req,res) =>{
//     res.json({
//         class: "changeer",
//         address: "sanepa",
//         email: "@ram.com"
//     })
// })


// app.get("/test", (req,res)=>{
//     res.json({
//         come: "documentation free create garnu pardaina",
//         rum: "auto save hunxa tesa maa collection create matra garnee ho"
//     })
// })


// app.listen(2014, () => console.log("i am a running java script language"))














const express = require("express");
const app = express();

app.get("/books", function(req,res){
    //login to fetch books from database
    res.json({
        message: "books fetched successfully"
    })
})



app.post("/books", function(req, res){
    // logic to add book to database goes here.
    res.json({
        message: "book added successfully"
    })
})

app.delete("/books/:id",function(req,res){
    // logic to delete book
    res.json({
        message: "Book deleted successfully"
    })
})



app.patch("/books/:fff", function(req,res){
    //logic to update book
    res.json({
        message: "Book updated successfully"
    })
})


app.listen(4400, function () {
    console.log("project/server/backend has started at port 4400")
})