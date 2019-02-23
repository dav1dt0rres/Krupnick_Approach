
const express = require('express')
var mongoose = require( 'mongoose' )

var Database=require('../Models/Database.js');
const router = express.Router();




router.get('/', function (req, res, next) {

    console.log("Inside /EditQuestion"+req.body.Number+" "+req.body.Test+" "+req.body.Test_Type)

    Database_Object=new Database();

    var Question_object= Database_Object.SearchQuestion(req.body.Number,req.body.Test,req.body.Test_Type);


    title="This is the Recalled Question"
    res.render('AddQuestions',{ title,QuestionText:Question_object.get })

})

router.post('/', function (req, res, next) {

    console.log("Inside Post /EditQuestion"+req.body.Number+" "+req.body.Test+" "+req.body.Test_Type)

    Database_Object=new Database();

    var Question_object= Database_Object.SearchQuestion(req.body.Number,req.body.Test,req.body.Test_Type);


    title="This is the Recalled Question"
    res.render('AddQuestions',{ title,QuestionText: Question_object.getQuestionText})

})

module.exports = router