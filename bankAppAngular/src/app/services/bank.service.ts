import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  accountDetails:any = {
    userone:{accno:1000,name:"ajay",bal:10000,username:"userone",password:"Test111*",history:[]},
    usertwo:{accno:1001,name:"sajay",bal:20000,username:"usertwo",password:"test222",history:[]},
    userthree:{accno:1002,name:"vijay",bal:30000,username:"userthree",password:"test333",history:[]}

                     };

  authenticateUser=(uname:string,pwd:string)=>{
      let dataset=this.accountDetails;
                    
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
      Deposit=(uname:string,pwd:string,amt:number)=>{
       let user=this.authenticateUser(uname,pwd)
       let dataset=this.accountDetails;

        alert("bank deposit success")

        if (user==1){

         //to avoid the issue of amount appending we use parseInt()....parseInt(amt)
          dataset[uname].bal+=amt;
          dataset[uname].history.push({
             amount:amt,transactionType:"credit"
          });

          alert("your account credited with the amount"+amt+"available balance ="+dataset[uname].bal)

       
       }
       else if(user==0){
          alert("password is incorrect")

       }
       else if(user==-1){
          alert("no user exsist with provided username")

       }

    }
        

      Withdrawal=(uname:string,pwd:string,amt:number)=>{
        let user=this.authenticateUser(uname,pwd)
       let dataset=this.accountDetails;
        alert("bank withdraw")
      
        if (user==1){
         if(dataset[uname].bal<amt){
            alert("insufficient balance")
         }
          

          //to avoid the issue of amount appending we use parseInt()....parseInt(amt)
       else
           {
             dataset[uname].bal-=amt;
             dataset[uname].history.push({
               amount:amt,transactionType:"debit"
            })

           alert("your account debited with the amount"+amt+"available balance ="+dataset[uname].bal)
           }
        
        }
        else if(user==0){
           alert("password is incorrect")
 
        }
        else if(user==-1){
           alert("no user exsist with provided username")
 
        }
      }
//show history
      getHistory()
      {

         let dataset=this.accountDetails;
         return dataset["userone"].history;
      }


  
}
