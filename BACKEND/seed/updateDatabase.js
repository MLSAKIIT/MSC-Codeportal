const mongoose = require('mongoose');
const qodequestionbank = require('../model/questions');
const dotenv = require('dotenv');
dotenv.config({path : '../.env'});

/* Imports: */
const set_1 = require('./dataset_1.json');
const set_2 = require('./dataset_2.json');

mongoose.connect(process.env.MONGO_CLOUD_URI,
 {
     useNewUrlParser: true,
     useCreateIndex: true,
    useUnifiedTopology: true
 },()=>console.log(`[*] SEED CONNECTED TO DB, COLLECTION~ ${process.env.CLOUD_DB_COLLECTION}`));


/* Script Needs a Fix :( */  
let ERROR_FLAG = false;
const updateDatabase = async()=>{
    try{
        await qodequestionbank.deleteMany({});
        // await qodequestionbank.drop();
        for(let x=0;x<set_1.length;x++){
            let newquestion = {
                question_id: set_1[x].question_id,
                problem_statement: set_1[x].problem_statement,
                topic: set_1[x].topic,
                link: set_1[x].link,
                status: set_1[x].status,
                favourite: set_1[x].favourite
            }
            let data = new qodequestionbank(newquestion);
            await data.save();
        }
    }catch(err){
        ERROR_FLAG = true;
    }

}

updateDatabase().then(()=>{
    mongoose.connection.close();
    const DB_UPDATE_LOG = {
        message : ERROR_FLAG? 'Cloud DB Not Updated' : 'Question Bank Updated to Cloud DB',
        collection: process.env.CLOUD_DB_COLLECTION
    }
    console.table(DB_UPDATE_LOG);
})