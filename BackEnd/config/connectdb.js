const mongoose = require('mongoose')


const connectdb =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Successfully connected on database')
    } catch (error) {
        console.log('OOPS!!!'+error)
    }
}

module.exports = connectdb