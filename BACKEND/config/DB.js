// Mongo Database Connection: 

const mongoose = require(`mongoose`);
const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost:27017/temporary`

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
        console.table(ERRORLOG);
        process.exit(1);
    }
}

module.exports = connectDB;