const {Food, Users} = require('./modelSchema')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoDb = require('./MongoDb')
const Signupfn = require('./Signup')

app.use(express.json())
app.use(cors())



mongoDb();


app.post('/Login', (req,res)=>{
    const newUser = new Users({
        email: req.body.email,
        password: req.body.password
    })
    
    newUser.save()
    .then(()=>{
        console.log('saved')
        res.json({message: 'Sent To MongoDb'})
    })
    .catch(()=>{
        console.log('error')
        res.json({error: 'Email already in use'})
    })
})


app.post('/Register', async (req, res)=>{
    
    const DataOfUser = await Signupfn({email: req.body.email, password: req.body.password});
    console.log(DataOfUser)
    if (DataOfUser === true){
        res.json({message: 'LoggedIn'})
    }
    if (DataOfUser === false){
        res.json({error:'Incorrect Password or Email'})
    }

})



app.listen(3001, ()=>{
    console.log('listening on 3001')
})

mongoDb