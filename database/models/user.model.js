const userModel = (sequelize, DataTypes)=>{
    const User = sequelize.define("user",{
        username :{
            type: DataTypes.STRING,
        },
usermail: {
    type:DataTypes.STRING,
},




userclass: {
    type: DataTypes.INTEGER,
},




    })
    return User
}


module.exports =  userModel