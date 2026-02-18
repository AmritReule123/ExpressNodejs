
// hame yaha database connection ko code/logic lekxan

// database/connection.js
const { Sequelize, DataTypes } = require("sequelize")

// //import bookModel 
// const bookModel = require("./models/book.model")

// const userModel = require("./models/user.model")




const sequelize = new Sequelize(
  "postgresql://postgres.yqrnyiytigxzgskoqvgq:expressnodejsho@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres")

// test connection
sequelize.authenticate()
  .then(() => {
    console.log("✅ Supabase DB authenticated & connected!");
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err.message);
  });

// db object
const db = {};
db.Sequelize = Sequelize
db.sequelize = sequelize


db.books = require("./models/book.model")(sequelize,DataTypes)
db.users = require("./models/user.model")(sequelize,DataTypes)


///migrate code ho yo chai 
sequelize.sync({alter: false}).then(()=>{
  console.log("Migrate cayo hai tw")
})


module.exports = db;
module.exports = sequelize


