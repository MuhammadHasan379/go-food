const mongoose = require('mongoose')
const {Food, Users} = require('./modelSchema')


const uri = 'mongodb+srv://Hasan:374%40Burak@cluster0.0o7a0yb.mongodb.net/?retryWrites=true&w=majority'



const dbConnect = async({email, password})=>{
    try{
        const UserData = await Users.find({})
        try{
            const UserTarget = UserData.filter((UserData)=> UserData.email === email)
       
        console.log(password)
        console.log(email)
        
        if (UserTarget[0].password === password){
            return true
        }
        else{
            return false
        }
    }
    catch{
        return false;
    }
        
    }
    catch(error){
        console.log(error)
    }

}

module.exports = dbConnect;
