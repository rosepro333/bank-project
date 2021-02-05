var express = require('express');
var router = express.Router();
var bankService= require("../services/bank.service");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.username)
  //res.send("hello world");
   res.render('index', { title: 'Express' });

});

//POST.................
router.post('/login', function(req, res, next) {
 // console.log(req.body)
  const result=bankService.authenticateUser(req.body.username,req.body.password)
  console.log(result)
  
 if(result==1){
       res.send({message:"logged in",token:"hjuu"});
  }
  else{
      res.send("invalid credentials");
  }
        //res.send("hello world");

});

//DEPOSIT..........................

router.post('/deposit', function(req, res) {
  // console.log(req.body)
   const message=bankService.Deposit(req.body.username,req.body.password,req.body.amount)
   res.send(message);
   
 
 });


//WITHDRAW........................

 router.post('/withdraw', function(req, res) {
  // console.log(req.body)
   const message=bankService.Withdrawal(req.body.username,req.body.password,req.body.amount)
   res.send(message);
   
 
 });
 //HISTORY...................
 router.post('/history', function(req, res) {
 
   const message=bankService.getHistory(req.body.username,req.body.password);
   res.send(message);
   

 });





module.exports = router;
