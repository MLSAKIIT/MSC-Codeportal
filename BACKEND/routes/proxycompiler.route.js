/* Qode IDE end points */ 
const express = require('express');
const _router = express.Router();
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const qodequestionbank_1 = require('../model/questions');

dotenv.config({path: '../.env'});


/* Credential For Compiler Test: */
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const sheet2_index = require('../seed/dataset_1.json').length;

_router.get('/ping', (req,res,next)=>{
    const LOG = {
        status: 200,
        time: new Date(),
        endpoints :{
            ping: "https://qode-msc.herokuapp.com/api/qode/ping",
            compiler: "https://qode-msc.herokuapp.com/api/qode/qode-compiler",
            Qode_Practice_Sheet_1: "https://qode-msc.herokuapp.com/api/qode/sheet1?topic=",
            Qode_Practice_Sheet_2: "https://qode-msc.herokuapp.com/api/qode/sheet2?topic="
        }
    }
    return res.status(200).json(LOG);
})

/*  */ 
_router.get(`/problems`, async(req,res, next)=>{
    try{
        const questionbank_1 = await qodequestionbank_1.find({});
        const data = {
            status: 200,
            message: `Qode Practice Problem [Complete Set]`,
            questions: questionbank_1
        }
        res.status(200).json(data);
    }catch(err){
        return res.status(401).json({
            message: "Proxy Failed",
            error : err.message
        });
    }

})

_router.get('/sheet1', async(req,res,next)=>{
    try{
        const topic = req.query.topic || "";
        let filteredData = (topic !== "")? await qodequestionbank_1.find({topic: topic})
                                         : await qodequestionbank_1.find({})
        let secondaryfilterData = [];
        for(let questions of filteredData){
            if(questions.question_id<=sheet2_index)
                secondaryfilterData.push(questions);
        }
        const data = {
            status: 200,
            message: `Problem Set #1 ${topic === ""? "" :"On "+ topic}`,
            questions: secondaryfilterData
        }
        res.status(200).json(data);
    }catch(err){
        return res.status(401).json({
            message: "Proxy Failed",
            error : err.message
        });
    }
})


_router.get('/sheet2', async(req,res,next)=>{
    try{
        let secondaryfilterData = [];
        const topic = req.query.topic || "";
        const filteredData = (topic !== "")? await qodequestionbank_1.find({topic: topic})
                                           : await qodequestionbank_1.find({})
        for (let question of filteredData) {
                if(question.question_id > sheet2_index)
                    secondaryfilterData.push(question);
        }
        
        const data = {
            status: 200,
            message: `Problem Set #2 ${topic === ""? "" :"On "+ topic}`,
            questions: secondaryfilterData
        }
        res.status(200).json(data);
    }catch(err){
        return res.status(401).json({
            message: "Proxy Failed",
            error : err.message
        });
    }
})

// check #1: for invalid endpoint requests.
_router.get('/*', (req,res,next)=>{
    res.status(205).json({
        status: 205,
        message: "invalid endpoint",
        time: new Date()
    })
})

_router.post('/qode-compiler', async(req,res,next)=>{
    try{
        let script = req.body.script;
        let stdin = req.body.stdin || "";
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
                stdin: stdin,
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
    //Only for tests. Checks could be added later.
}
function filterCode_cpp(script){
    // Filtering to add escape characters ['\n', '\']
    return script;
}

module.exports = _router;