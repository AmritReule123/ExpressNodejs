//boks, bookName, bookPrice, bookAutor, book






const bookModel = (sequelize, DataTypes)=>{
    const Book = sequelize.define("book",{
        thisisme : {
        type: DataTypes.STRING,
        allowNull : false
    },


bookPrice : {
    type: DataTypes.INTEGER,
    allowNull : false


},




bookAuthor: {
    type : DataTypes.STRING,
    allowNull: false
    // defaultValue : "Amrit Reule"
}
})  
return Book
}




module.exports = bookModel  // call garya ko arko thau ma bookModel connection.js maa
