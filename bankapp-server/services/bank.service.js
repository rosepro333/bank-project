
let accountDetails = {
    userone:{accno:1000,name:"ajay",bal:10000,username:"userone",password:"Test111*",history:[]},
    usertwo:{accno:1001,name:"sajay",bal:20000,username:"usertwo",password:"test222",history:[]},
    userthree:{accno:1002,name:"vijay",bal:30000,username:"userthree",password:"test333",history:[]}

                     };

    const authenticateUser=(uname,pwd)=>{
        let dataset=accountDetails;
                        
            if(uname in dataset){
            if(dataset[uname].password==pwd){
                                    
                    return 1;//valid user name and password
                        
                    }
            else{
                                    
                    return 0;//inavlid password
                }
                            
            }
        else{
                return -1;//no user exsist
                        
                }
                        
                        
                        
        }   

//deposit

const Deposit=(uname,pwd,amt)=>{
    let user=authenticateUser(uname,pwd);

    //let dataset=this.accountDetails;
     //alert("bank deposit success")

     if (user==1){

      //to avoid the issue of amount appending we use parseInt()....parseInt(amt)
       accountDetails[uname].bal+=amt;
       accountDetails[uname].history.push({

          amount:amt,
          transactionType:"credit"
       });

       return {
         balance:accountDetails[uname].bal,
         message:"your account credited with the amount"+amt+"available balance ="+accountDetails[uname].bal
      }

    
    }
    else {
       return {message:"invalid details"}
    }

 }
//withdraw

const  Withdrawal=(uname,pwd,amt)=>{
   let user=authenticateUser(uname,pwd)
   
   if (user==1){
      console.log(accountDetails[uname].bal)

    if(accountDetails[uname].bal<amt){
       return {message:"insufficient balance"}
    }
     
  else
      {
        accountDetails[uname].bal-=amt;
        accountDetails[uname].history.push
        ({
          amount:amt,
          transactionType:"debit"
       });

      return{
         balance:accountDetails[uname].bal,
         message: "your account debited with the amount"+amt+"available balance ="+accountDetails[uname].bal
           }
      }
   
   }
   else {
      return{message:"invalid details"}
   }
 }
 //history
 const getHistory=(uname,pwd)=>
 {
   let user=authenticateUser(uname,pwd);
   if (user==1){

      return accountDetails[uname].history
   }

   else{
      return[];

   }
   
}



   //export 
   
  module.exports={

    authenticateUser,
    Deposit,
    Withdrawal,
    getHistory


    
  }      