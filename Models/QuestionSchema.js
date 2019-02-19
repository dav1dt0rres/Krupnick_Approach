var mongoose = require('mongoose');

const Schema = mongoose.Schema;
var QuestionSchema = new Schema({
    Question_body: [String],
    Tag: String,
    Choices: [[String]],
    Test:String,
    Test_Type:String,
    Right_Answer:String

});


module.exports.question=mongoose.model('Question', QuestionSchema);
