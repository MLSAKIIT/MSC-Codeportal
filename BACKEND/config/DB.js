// Mongo Database Connection:
require('dotenv/config')
const mongoose = require(`mongoose`)
const MONGO_URI =
    process.env.MONGO_URI ||
    process.env.MONGO_CLOUD_URI ||
    `mongodb://localhost:27017/temporary`
console.log(MONGO_URI)
let DBConnectionStatus = true

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(MONGO_URI)
        console.log(
            `[*] DATABASE Connection Established: ${connect.connection.host}`
        )
    } catch (err) {
        const ERRORLOG = {
            STATUS: `DATABASED ERROR`,
            MSG: `${err.message}`,
        }
        DBConnectionStatus = false
        console.table(ERRORLOG)
    }
}
const connection = { connectDB, DBConnectionStatus }

module.exports = connection
