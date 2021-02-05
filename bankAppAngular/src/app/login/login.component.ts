import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
                    // username="";
                    // password="";
loginForm=this.fb.group({

  username:["" ,[Validators.required]],
  password:["" ,[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  )]]
 // password:["" ,[Validators.required,Validators.minLength(5)]]

//Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")

})
 constructor(private router:Router ,private bankService:BankService,private fb:FormBuilder ){

  
        }                    

                // onUsernameChange(event:any){
                // //alert(event.target.value)
                //   this.username=event.target.value;

                // }
                // onPasswordChange(event:any){

                //   this.password=event.target.value;

                // }
login(){

  if(this.loginForm.valid==false)
  {
               // console.log(this.loginForm.controls.username.errors)//take username errors....
                //OR....
              //  if(this.loginForm.get('username')?.errors)//if username is null ,it will not take errors.
              
              //  {
              //      alert("username is invalid")

              // }
              // else if(this.loginForm.get('password')?.errors)
              //  {
              //   alert("password is invalid")

              //  }
    alert("form is invalid")

  }
  else{
    
  
              // alert(username)
              //alert(this.username)
              const username=this.loginForm.value.username;
              const password=this.loginForm.value.password;
              
              alert(username);
              alert(password);

              const user = this.bankService.authenticateUser(username,password);
              
              if (user==1){
            

                alert("login successfull")
                this.router.navigateByUrl("/home");
                //window.location.href="userhome.html"
            
                  }
              else if(user==0){
            
              alert("password is incorrect")
              

                }
              else if(user==-1){
              
                alert("no user exsist with provided username")

              }

            }
    }

}