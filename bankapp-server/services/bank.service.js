const User = require('../models/user');

// let accountDetails = {
//     userone:{accno:1000,name:"ajay",bal:10000,username:"userone",password:"Test111*",history:[]},
//     usertwo:{accno:1001,name:"sajay",bal:20000,username:"usertwo",password:"test222",history:[]},
//     userthree:{accno:1002,name:"vijay",bal:30000,username:"userthree",password:"test333",history:[]}

//                      };

    const authenticateUser=(uname,pwd)=>{
     return User.findOne(
        {
        username: uname,
        password:pwd
        }
      );
        // let dataset=accountDetails;
                        
        //     if(uname in dataset){
        //     if(dataset[uname].password==pwd){
                                    
        //             return 1;//valid user name and password
                        
        //             }
        //     else{
                                    
        //             return 0;//inavlid password
        //         }
                            
        //     }
        // else{
        //         return -1;//no user exsist
                        
        //         }
                        
                        
                        
        }   

//deposit
const Deposit=(_id,amt)=>{

  //let user=authenticateUser(uname,pwd);

    //let dataset=this.accountDetails;
     //alert("bank deposit success")

  // if (user==1){
    return User.findById(
                    _id
                    //username:uname
              )
      .then(user=>{
                   user.bal+=amt;
                   user.history.push({

                      amount:amt,
                      transactionType:"credit"
                    })
                    user.save();

                    return {
                      balance:user.bal,
                      message:"your account credited with the amount"+amt+"available balance ="+user.bal
                      };
          

      });
     
            
            //         accountDetails[uname].bal+=amt;
            //           accountDetails[uname].history.push({

            //             amount:amt,
            //             transactionType:"credit"
            //           });

            //   return {
            //     balance:accountDetails[uname].bal,
            //     message:"your account credited with the amount"+amt+"available balance ="+accountDetails[uname].bal
            // };
            
   // }
    //else {
     //  return {message:"invalid details"}
    //}

    }



//withdraw

const  Withdrawal=(_id,amt)=>{
  // let user=authenticateUser(uname,pwd)
   
  return User.findById(
    _id
    //username:uname
     )
  .then(user=>{
        if(user.bal<amt){
                         return {message:"insufficient balance"}
                        }


        else{
              user.bal-=amt;
              user.history.push
                 ({
                    amount:amt,
                    transactionType:"debit"
                 });
            }    
      user.save();
      return{
              balance:user.bal,
              message: "your account debited with the amount"+amt+"available balance ="+user.bal
            };
       
  

    });



 //  if (user==1){
  //     console.log(accountDetails[uname].bal)

  //   if(accountDetails[uname].bal<amt){
  //      return {message:"insufficient balance"}
  //   }
     
  // else
  //     {
  //       accountDetails[uname].bal-=amt;
  //       accountDetails[uname].history.push
  //       ({
  //         amount:amt,
  //         transactionType:"debit"
  //      });

  //     return{
  //        balance:accountDetails[uname].bal,
  //        message: "your account debited with the amount"+amt+"available balance ="+accountDetails[uname].bal
  //          }
  //     }
   
   
  // else {
   //   return{message:"invalid details"}
  // }
}

 //history....................................................
 const getUser=(_id)=>
 {


  return User.findById(
       _id
    //username:uname
  );

   //let user=authenticateUser(uname);
  // if (user==1){

         //return accountDetails[uname].history
   //}

  // else{
    //  return[];

  // }
   
}
//.....update...................
const updateUser=function(_id,data)
{
  return User.findOneAndUpdate({_id},data);

}
//...LISTING OF USERS.......................

const getUsers=function()
{
  
  return User.find();
}

//DELETE.........................................

const deleteUser=function(_id){
 return User.deleteOne({
   _id
 })

}

   //export 
   
  module.exports={

    authenticateUser,
    Deposit,
    Withdrawal,
    getUser,
    updateUser,
    getUsers,
    deleteUser


    
  }      