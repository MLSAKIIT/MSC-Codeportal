const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let questionSchema = new Schema({
   "question_id": {
        type: Number,
        required: true,
        unique: true
    },
    "problem_statement": {
        type: String,
        required: true,
    },
    "topic":{
        type: String,
        default: "Not Available",
    },
    "link": {
        type: String,
        unique: true,
    },
    "status": {
        type: Boolean,
        default: false
    },
    "favourite": {
        type: Boolean,
        default: false
    }
}, {
    collection : 'qodequestionbank',
});


module.exports = mongoose.model('qodequestionbank', questionSchema);