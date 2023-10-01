const mongoose = require('mongoose')

const uri = 'mongodb+srv://Hasan:374%40Burak@cluster0.0o7a0yb.mongodb.net/?retryWrites=true&w=majority'



const dbConnect = async()=>{
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })

    .then(()=>{
        console.log('connection Complete')
    })
    .catch((e)=>{
        console.log('can;t connect')
        console.log(e)
    })

}

module.exports = dbConnect





