const express = require("express");
const app = express();

app.get("/", (req, res) => {
 res.json({
    name: "amrit",
    address: "ktm",
    age: 22
 })
});


app.get("/about", (req, res) => {
    res.json({
        company: "Nepal Software",
        product: "software",
        location: "koteshowr" 
    })

});



app.post("/about", (req, res) => {
    res.json({
        company: "IT industry",
        product: "Mobile app ",
        location: "Bhaktapur" 
    })

});


app.get("/contact", (req,res)=>{
    res.json({
        emaiL: "@gmail.com",
        number: 131313,
        phone: 11111
    })
})
///***** */ app.post browsers / clients cannot directly open ****//////
// app.post("/register", (req,res) =>{
//     res.json({
//         message: "not directly open post "
//     })
// });

app.listen(3500, () => console.log("i ama runnign a code in  3500"));

  