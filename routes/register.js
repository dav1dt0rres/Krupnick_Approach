

var mongoose = require( 'mongoose' )
const okta = require('@okta/okta-sdk-nodejs')
const express = require('express')
var counter=0;
var timer;
const router = express.Router()
var descriptionList=[];
var Responses=[];
var mySet;
var Database_Object;
var Question_object;
var title;
const client = new okta.Client({
  orgUrl: 'https://dev-902682.oktapreview.com',
  token: '003nELt2MfhfNHg0En0FEAsWEaJqL9rkUAfBMU29MG'
})



router.get('/', (req, res, next) => {
  const title = 'Create an account'
  if (req.userinfo) {
    return res.redirect('/')
  }


  res.render('register', { title })

})


router.post('/', (req, res, next) => {
  //console.log("INside Welcome")
  title="Welcome to your Dashboard "+ req.body.firstName

  res.render('dashboard', {title})



})




module.exports = router
