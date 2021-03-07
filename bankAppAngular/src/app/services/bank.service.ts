import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment"


const apiUrl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class BankService {
 constructor (private http:HttpClient){

 }

//   accountDetails:any = {
//     userone:{accno:1000,name:"ajay",bal:10000,username:"userone",password:"Test111*",history:[]},
//     usertwo:{accno:1001,name:"sajay",bal:20000,username:"usertwo",password:"test222",history:[]},
//     userthree:{accno:1002,name:"vijay",bal:30000,username:"userthree",password:"test333",history:[]}

//                      };

  authenticateUser=(uname:string,pwd:string)=>{
//httprequest
         return this.http.post(apiUrl+"login",{
               "username":uname,
               "password":pwd

               
         });
// .subscribe((data)=>{

   //    console.log(data);

   // })
      // let dataset=this.accountDetails;
                    
      //    if(uname in dataset){
      //    if(dataset[uname].password==pwd){
                               
      //            return 1;//valid user name and password
                    
      //            }
      //    else{
                               
      //             return 0;//inavlid password
      //        }
                       
      //    }
      // else{
      //         return -1;//no user exsist
                    
      //       }
                    
                    
                    
      }   

      generateHeader=()=>{
         let token=localStorage.getItem("token");
         //Instances are immutable,means we can't change headers...
         // Modifying methods return a cloned instance with the change...The original object is never changed.
        // that y we stored in new variable, header.
       
         let headers=new HttpHeaders();
         headers=headers.set("Authorization","Bearer "+token)
         //here not updating...modified ones we stored in new variable
         return headers;

      }
      Deposit=(amt:number)=>{
      
         return this.http.post(apiUrl+"deposit",{
               
               "amount":amt

         },{
            //setting headers
            headers:this.generateHeader()
         });


      //  let user=this.authenticateUser(uname,pwd)
      //  let dataset=this.accountDetails;

      //   alert("bank deposit success")

      //   if (user==1){

      //    //to avoid the issue of amount appending we use parseInt()....parseInt(amt)
      //     dataset[uname].bal+=amt;
      //     dataset[uname].history.push({
      //        amount:amt,transactionType:"credit"
      //     });

      //     alert("your account credited with the amount"+amt+"available balance ="+dataset[uname].bal)

       
      //  }
      //  else if(user==0){
      //     alert("password is incorrect")

      //  }
      //  else if(user==-1){
      //     alert("no user exsist with provided username")

      //  }

    }
        

      Withdrawal=(amt:number)=>{

         return this.http.post(apiUrl+"withdraw",{
               
               "amount":amt

         },{
            //setting headers
            headers:this.generateHeader()
         });


      //   let user=this.authenticateUser(uname,pwd)
      //   let dataset=this.accountDetails;
      //   alert("bank withdraw")
      
      //   if (user==1){
      //    if(dataset[uname].bal<amt){
      //       alert("insufficient balance")
      //    }
          

      //     //to avoid the issue of amount appending we use parseInt()....parseInt(amt)
      //  else
      //      {
      //        dataset[uname].bal-=amt;
      //        dataset[uname].history.push({
      //          amount:amt,transactionType:"debit"
      //       })

      //      alert("your account debited with the amount"+amt+"available balance ="+dataset[uname].bal)
      //      }
        
      //   }
      //   else if(user==0){
      //      alert("password is incorrect")
 
      //   }
      //   else if(user==-1){
      //      alert("no user exsist with provided username")
 
      //   }
      }
//show history
      getHistory()
      {

           return this.http.get(apiUrl+"history",{
             //setting headers
             //headers are second parameter in get
               headers:this.generateHeader()

            });
         // let dataset=this.accountDetails;
         // return dataset["userone"].history;
      }
 //show profile
 getProfile()
 {

      return this.http.get(apiUrl+"profile",{
        //setting headers
        //headers are second parameter in get
          headers:this.generateHeader()

       });
    // let dataset=this.accountDetails;
    // return dataset["userone"].history;
 }
 UpdateProfile(username:string,accno:number,bal:number)
 {
//order URL....DATA....HEADER
      return this.http.patch(apiUrl+"profile",{
         username,
         accno,
          bal
       },{
          headers:this.generateHeader()

       });
    
 }
 //users listing
 getUsers(){
   return this.http.get(apiUrl+"users",{
       headers:this.generateHeader()

    });
 
 }


  getUserProfile=(userId:any)=>{
   return this.http.get(apiUrl+"users/"+userId,{
       headers:this.generateHeader()

     });


 }
 



  
}
