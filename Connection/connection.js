const mongoose = require('mongoose')
const connectionDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`MongoDB connected :${connection.connection.host} `)


    } catch (error) {
        console.log('could not connect to mongodb...',error)
    }
}


module.exports= connectionDB;