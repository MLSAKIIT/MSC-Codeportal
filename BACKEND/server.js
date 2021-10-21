const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config({path : './config/config.env'});
dotenv.config(); //for qode compiler


const connectDB = require('./config/DB');

/* DB Model Import & Connection */
const Users = require('./model/users')
connectDB();
const PORT = 5000 || process.env.PORT;

/* Middleware */ 
app.use(express.json());
app.use(cors());

/* Routes */
const auth = require('./routes/auth.route');
app.use('/api/auth', auth);


/* api endpoints*/
app.get('/', (req,res)=>{
    //  temporary Base endpoint : 
    let base_endpoint = `</br></br><h1><center>Welcome To Qode Server!</h1>
                         <p>In Progress..... :)</p></center>`;

    res.status(200).send(base_endpoint);
})

app.get('/users', async(req,res)=>{
    try{
        const users = await Users.find({});
        res.status(200).json(users);
    }catch(error){
        console.log(error);
    }
})
/* Qode IDE end points */ 

// Credential For Compiler Test:
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

app.post('/qode-compiler', async(req,res)=>{
    try{
        let script = req.body.script;
        let language = filterLanguageOption(req.body.language);
        
        if(language == "cpp14"){
            script = filterCode_cpp(script);
        }
        /*
        Needs Filters for Scripts
            i. filter modules based on languages to format the scripts 
              before making the api call to the compiler
        */ 
        let versionIndex = req.body.versionIndex || "0";
        const response = await fetch(process.env.COMPILER, {
            method : "POST",
            headers :{
                "Content-type": "application/json; charset=UTF-8"
            },
            body : JSON.stringify({
                clientId: clientId,
                clientSecret: clientSecret,
                script: script,
                language: language,
                versionIndex: versionIndex
            })
        });
        let data = await response.json();
        return res.status(200).json({
            status : 200,
            message : "Qode proxy compiler: Success",
            results : data
        });
    }catch(err){
        return res.status(401).json({
            message: "Proxy Failed",
            error : err.message
        });
    }
});

// Filters:
function filterLanguageOption(language) {
    if(language == 'cpp' || language == 'CPP' || language == "c++"
       || language == 'C++' || language == "cpp17" || language == "cpp11")
        return "cpp14";
    else
        return language;
    //This is only for tests. Checks could be added later.
}
function filterCode_cpp(script){
    // Filtering to add escape characters ['\n', '\']
    return script;
}
app.listen(PORT,()=>{
    const LOG = {
        PORT : `${PORT}`,
        STATUS : `Live`,
        BASEURI : `http://localhost:${PORT}/` 
    }
    console.table(LOG)
})