const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config({path : './config/config.env'});
dotenv.config();

const PORT = process.env.PORT || 5000;

/* DB Model Import & Connection */
const connection = require('./config/DB');
const Users = require('./model/users')

connection.connectDB();

/* Middleware */ 
app.use(express.json());
app.use(cors());

/* Routes */
const auth = require('./routes/auth.route');
const compiler = require('./routes/proxycompiler.route')
app.use('/api/qode', compiler);
app.use('/api/auth', auth);


/* api endpoints*/
app.get('/', (req,res)=>{
    //  Temporary Base endpoint : 
    let base_endpoint = `</br></br><h1><center>Welcome To Qode Server!</h1>
                         <p>In Progress..... :)</p></center>`;

    res.status(200).send(base_endpoint);
})

// Temporarily secured end point
app.get('/users', async(req,res)=>{
    let token = req.body.token || req.query.token;
    if(token === process.env.USERS_DB_ACCESS_TOKEN){
        try{
            const users = await Users.find({});
            res.status(200).json(users);
        }catch(error){
            const ERROR_LOG = {
                message: `Unable to access verified users`,
                error : error.message
            }
            res.status(400).json(ERROR_LOG);
        }
    }else{
        res.status(403).json({
            message: 'Invalid DB ACCESS Token'
        })
    }
})

app.listen(PORT,()=>{   
    const LOG = {
        PORT : `${PORT}`,
        SERVERSTATUS : `Live`,
        DATABASE: connection.DBConnectionStatus? `Online` : `Offline`,
        BASEURI : `http://localhost:${PORT}/` 
    }
    console.table(LOG)
})