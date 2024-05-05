const mongoose = require('mongoose')

const connetDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB CONNECTION IS SUCCESSFULL")
    } catch (error) {
        console.log("DB CONNECTION FAILED!!")
    }
}
module.exports = { connetDB }