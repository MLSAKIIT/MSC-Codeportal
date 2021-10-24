// Mongo Database Connection: 

const mongoose = require(`mongoose`);
const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost:27017/temporary`

let DBConnectionStatus = true;

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log(`[*] DATABASE Connection Established: ${connect.connection.host}`);
    }catch(err){
        const ERRORLOG = {
            STATUS : `DATABASED ERROR`,
            MSG : `${err.message}`
        }
        DBConnectionStatus = false;
        console.table(ERRORLOG);
        process.exit(1);
    }
}
const connection = {connectDB, DBConnectionStatus}

module.exports = connection;