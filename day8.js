const express = require("express");
const app = express();

app.get("/about", function(req,res){
    //login to fetch books from database
    res.json({
        message: "get are working used in postman"
    })
})



app.post("/contact", function(req, res){
    // logic to add book to database goes here.
    res.json({
        message: "contact added successfully in postman"
    })
})




app.delete("/contact/:ram",function(req,res){
    // logic to delete book
    res.json({
        message: "Contact deleted successfully"
    })
})



app.patch("/contact/:rita", function(req,res){
    //logic to update book
    res.json({
        message: "Contact updated successfully"
    })
})


app.patch("/contact/:winner", function(req,res0){
    res.json({
        sangam: "total forwqard dfsd sdfsdfsdfsd"
    })
})


app.listen(4900, function () {
    console.log("project/server/backend has started at port 4900")
})



// DATABASE_URL="postgresql://postgres.gcexfaruqeeyxuubfklb:fullstack@123#@aws-1-ap-south-1.pooler.supabase.com:6543/postgres"

