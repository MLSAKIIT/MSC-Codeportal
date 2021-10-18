const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path : './config/config.env'});

const connectDB = require('./config/DB');

// DB Model Import & Connection
const Users = require('./model/users')
connectDB();
const PORT = 5000 || process.env.PORT;

// Middleware 
app.use(express.json());
app.use(cors());

// Routes
const auth = require('./routes/auth.route');
app.use('/api/auth', auth);


// api endpoints
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

app.listen(PORT,()=>{
    const LOG = {
        PORT : `${PORT}`,
        STATUS : `Live`,
        BASEURI : `http://localhost:${PORT}/` 
    }
    console.table(LOG)
})