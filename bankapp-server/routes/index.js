const express = require('express');
const router = express.Router();
const bankService= require("../services/bank.service");
const jwt=require('jsonwebtoken');
const User = require('../models/user');
const jwtSecret="secretkey67647&"



const authMiddleWare=(req,res,next)=>{
  try{
    console.log(req.headers.authorization);
    const token=req.headers.authorization.split(" ")[1];
    const decoded=jwt.verify(token,jwtSecret)
    req.user=decoded;
     next();

  }
  catch{
    res.status(401).send({message:"invalid token"});
  }


}

/* GET home page. */
router.get('/', function(req, res, next) {
  //GIVE DATA TO DATABASE...................
  // const user=new User(
  //   {
  //     accno:16,
  //     name:"sara",
  //     bal:300,
  //     username:"tadd",
  //     password:"Jass12*",
  //     history:[
         
  //     ]
  // })
  // user.save();
//.....................................................
  //console.log(req.query.username)
  //res.send("hello world");

      //TAKE DATA FROM DATABASE............User.find()=>asynchronus action
     // User.findOne({
       // username: req.body.username,
       // password: req.body.password
     // });
      //promises
      //.then(data=>{
     // res.send(data);
     // res.render('index', { title: 'Express' });

     // });
//............................................
User.find({
  bal:{
    $gt:1000
  }
})
.then(users=>{
  res.send(users)
})



   

});
//LISTING OF USERS................

router.get('/users',authMiddleWare, function(req, res) {
  // console.log(req.body)
   bankService.getUsers()
   .then(users=>{
    res.send(users);

  });

})

//POST.................
router.post('/login', function(req, res, next) {
 // console.log(req.body)
  bankService.authenticateUser(req.body.username,req.body.password)

  //console.log(result)
  .then(user=>{
  
   if(user){

     const token=jwt.sign({
    //epoch time since 97+hrs or minutes
      exp:Math.floor(Date.now()/1000)+(60*60*5),  //here add 5 hrs
      username:req.body.username,
      _id:user._id

    },jwtSecret);

        //take username from token
   //const decoded=jwt.verify(token,jwtsecret)
  
    res.send({
      message:"logged in",
      token:token,
      //decoded
          });
  }
  else{
      res.status(422).send(
        {
        message:"invalid credentials"
        });
     }
        //res.send("hello world");
    });

});

//DEPOSIT..........................

router.post('/deposit',authMiddleWare, function(req, res) {
  // console.log(req.body)

 // const decoded=jwt.verify(req.body.token,jwtSecret)
  // console.log(decoded)
bankService.Deposit(req.user._id,req.body.amount)
      .then(message=>{
        res.send(message);

      });
  
 })
 


//WITHDRAW.............................

 router.post('/withdraw', authMiddleWare,function(req, res) {
  // console.log(req.body)
 
  //const decoded=jwt.verify(req.body.token,jwtSecret)
  bankService.Withdrawal(req.user._id,req.body.amount)
 
  .then(message=>{
    res.send(message);

  });

 })

 //HISTORY...................
 router.get('/history',authMiddleWare, function(req, res) {

  // const decoded=jwt.verify(req.body.token,jwtSecret)
  bankService.getUser(req.user._id)
        .then(user=>{
              res.send(
                user.history
              );

            });
   
 });

//PROFILE..............................
router.get('/profile',authMiddleWare, function(req, res) {

  // const decoded=jwt.verify(req.body.token,jwtSecret)
  bankService.getUser(req.user._id)
        .then(user=>{
              res.send(
                  user
              );

            });
   
 });

//PROFILE UPDATION...............
 router.patch('/profile',authMiddleWare, function(req, res) {
  bankService.updateUser(req.user._id,req.body)
  .then(user=>{
  //  console.log(user)
        res.send({message:"Profile  updated successfully"});

      });

 });

 //id..........
 router.patch('users/:id', function(req, res) {
   res.send(req.params.id );
      })

//delete one user..............
router.delete('users/:id', function(req, res) {
  bankService.deleteUser(req.params.id )
  .then(user=>{
        res.send({message:"Profile  updated successfully"});

      });
     })




module.exports = router;

