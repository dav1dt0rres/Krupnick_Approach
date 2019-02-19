const express = require('express')
const Question = require('../Models/Question.js');
var Database=require('../Models/Database.js');
const Student = require('../Models/Student.js');

const router = express.Router()
var counter=0;
var timer;

var descriptionList=[];
var Responses=[];
var mySet;
var Database_Object;
var Question_object;
var Student_Object;
var title;

router.get('/', function (req, res, next) {
  //const { profile } = req.user
  title="Beginning of Test Prompt"
  console.log("inside dashboard")
  Database_Object=new Database();

  console.log("Request Body Text"+req.body.firstName,req.body.lastName,req.body.email)
  var id=Database_Object.getStudentID(req.body.firstName,req.body.lastName,req.body.email);
  Student_Object=new Student(req.body.firstName,req.body.lastName,req.body.email,id);
  Database_Object.InitializeQuestions();



  res.render('register_Question',{title, Answer_A:"This is a Sample", Answer_B:"This is a Sample",Answer_C: "This is a Sample", storyboxID:"This is a Sample"})

})


router.post('/', function (req, res, next) {

  if (counter!=0){////Maintains the clock
    clearInterval(mySet);
  }
  var duration=1*60
  Question_object=Database_Object.getQuestion()

  title=Question_object.Question_text;
  res.render('register_Question', {title, Answer_A:Question_object.getOptions()[0],
    Answer_B:Question_object.getOptions()[1],Answer_C:Question_object.getOptions()[2],
    Answer_D: Question_object.getOptions()[3], Answer_E:Question_object.getOptions()[4],
    storyboxID:Question_object.Question_text})


  if (counter!=0){
    Question_object.recordResponse(req.body.combo,timer)
    Responses.push(Question_object);
    Database_Object.recordSession(Question_object,Student_Object);
  }


  console.log(JSON.stringify(req.body))
  startTimer(duration)
  ++counter;


})
function SimilarMethod(){
  var duration=1*60
  Question_object=Database_Object.getSame_MethodQuestion(Responses[Responses.length-1]);

  title=Database_Object.getQuestion().Question_text;
  res.render('register_Question', {title, Answer_A:Question_object.getOptions()[0],Answer_B:Question_object.getOptions()[1],Answer_C:Question_object.getOptions()[2]})

}

function startTimer(duration) {
  var minutes, seconds;
  timer = duration;
  mySet=setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;



    if (--timer < 0) {
      timer = duration;

    }
  }, 1000);

}

module.exports = router
