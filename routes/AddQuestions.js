
const express = require('express')
var mongoose = require( 'mongoose' )

var Database=require('../Models/Database.js');
const router = express.Router()
const Question_Schema = mongoose.model('Question');

var Database_Object;



router.get('/', (req, res, next) => {
   console.log("INside AaddQuestions")
    //mongoose.model('Question').remove({});
    Database_Object=new Database();

    res.render('AddQuestions')

})
router.get('/DeleteDatabase',function (req, res, next) {
    console.log("inside Delete!!!!!!")
    //title="DataBase Deleted, you may enter a new Question"
    Database_Object.DeleteEntries();
    //res.render('AddQuestions',{ title })
    res.redirect('/AddQuestions')

})


router.post('/', (req, res, next) => {

    console.log("Going in"+" "+req.body.QuestionText+req.body.AnswerA+ req.body.AnswerB+
        req.body.AnswerC+req.body.AnswerD,req.body.Tag,req.body.Right_Answer)
    Body_List=ParseText([req.body.QuestionText,req.body.AnswerA,req.body.AnswerB,req.body.AnswerC,req.body.AnswerD,req.body.AnswerE,
        req.body.Tag,req.body.Test,req.body.Test_Type,req.body.Right_Answer])

    console.log("Question of Text outside"+Body_List[0]);
    console.log("BodyList outside"+Body_List[1]);
    console.log("BodyList outside"+Body_List[2]);
    console.log("BodyList outside"+Body_List[3]);
    console.log("BodyList outside"+Body_List[4]);
    console.log("BodyList outside"+Body_List[5]);
    console.log("BodyList outside"+Body_List[6]);
    console.log("BodyList outside"+Body_List[7]);
    console.log("BodyList outside"+Body_List[8]);
    console.log("BodyList outside"+Body_List[9]);

    Database_Object.addNewQuestion(Body_List);

    const title='Successful Entry of Question, if you would like to enter new questions please do below...'
    res.render('AddQuestions',{ title })


})

function ParseText(List){
    //console.log("Inside Parse Text"+List)
    var Temp=[[]];

    for (var i = 0; i < List.length; i++) {
        var object=[]
        object=List[i].split(' ')
       // console.log("OBject"+object)
        Temp[i]=object
        //console.log("returning Parsed"+Temp)
    }

    return Temp
}


module.exports = router