const express = require("express");
const ram = express();


//alternative method ///
// let app = require("express")();


ram.get("/", (music,song)=>{
    song.send("songs are widely listen and love dance")
})

ram.get("/about", (music,song)=>{
    song.send("car myaa music bachaa oww")
})

ram.listen(3200, function(){
    console.log("this is a javascript dnfc,dsn ,sndf,ndsn msdmsd.fm language server")
})