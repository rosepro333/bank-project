// //object within other object
//getData() is a method present inside the class Bank
//calling a method inside the class.....
//one method ...create object ,then call...or static method


class Bank{

    static getData=()=>{

    
        var accountDetails={
        userone:{accno:1000,name:"ajay",bal:10000,username:"userone",password:"test"},
        usertwo:{accno:1001,name:"sajay",bal:20000,username:"usertwo",password:"test1"},
        userthree:{accno:1002,name:"vijay",bal:30000,username:"userthree",password:"test2"}

                         }

                  return accountDetails
               }

       static login=()=>{

         

       let uname=document.querySelector("#username").value
       let pwd=document.querySelector("#password").value
       let dataset=Bank.getData()

     //           
     //      var accountDetails={
     //      userone:{accno:1000,name:"ajay",bal:10000,username:"userone",password:"test"},
     //      usertwo:{accno:1001,name:"sajay",bal:20000,username:"usertwo",password:"test1"},
     //      userthree:{accno:1002,name:"vijay",bal:30000,username:"userthree",password:"test2"}
     //                          }

          //check uname present inside the dataset
          if(uname in dataset){
               if(dataset[uname].password==pwd){
                    alert("login successfull")
                    //........................
                    window.location.href="userhome.html"
                    //.....................
               }
               else{
                    alert("password is incorrect")
               }
           
          }
          else{
               alert("no user exsist with provided username")
          }


                   }



         static Deposit=()=>{

          let uname=document.querySelector("#uname").value
          let pwd=document.querySelector("#pwd").value
          let amt=Number(document.querySelector("#amt").value)
          let dataset=Bank.getData()

          if(uname in dataset){
               if(dataset[uname].password==pwd){

                  dataset[uname].bal+=amt;
                  alert("your account credited with the amount"+amt+"available balance ="+dataset[uname].bal)

                   
               }
               else{
                    alert("password is incorrect")
               }
           
          }
          else{
               alert("no user exsist with provided username")
          }








         }    
         
         static Withdrawal=()=>{


          let uname=document.querySelector("#uname").value
          let pwd=document.querySelector("#pwd").value
          let amt=Number(document.querySelector("#amt").value)
          let dataset=Bank.getData()

          if(uname in dataset){
               if(dataset[uname].password==pwd)
               {
                        if(dataset[uname].bal>=amt){

                         dataset[uname].bal-=amt;

                          alert("your account debited with the amount"+amt+"available balance ="+dataset[uname].bal)

                         }
                         else{
                              alert("insufficient balance")
                         }
                  
                   
               }
               else{
                    alert("password is incorrect")
               }
           
          }
          else{
               alert("no user exsist with provided username")
          }



         }


  }




  






















// //check account no 1000??
// //if exsist print person name..
// if(1000 in accountDetails){
//     console.log(accountDetails[1000].name)
// }
// else{
//     console.log("account no does not exsist")
// }

