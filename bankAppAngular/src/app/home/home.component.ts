import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  // username="";
  // password="";
  // amount:number=0;

  homeForm=this.fb.group({

    username:[""],
    password:[""],
    amount:[]
  
  })
 

  constructor(private bankService:BankService,private router:Router,private fb:FormBuilder ){

    // alert("consrttor")
   } 
  
           
      // onUsernameChange(event:any){
      //   //alert(event.target.value)
      //   this.username=event.target.value;
                
      //   }
      //   onPasswordChange(event:any){
                
      //   this.password=event.target.value;
                
      //   }
      //   onAmountChange (event:any){
      //   // console.log(typeof event.target.value);

      //     this.amount=parseInt(event.target.value);
                  
      //   }

Deposit(){
  //alert("deposit success")
  const username=this.homeForm.value.username;
  const password=this.homeForm.value.password;
  const amount=parseInt(this.homeForm.value.amount);

this.bankService.Deposit(username,password,amount);
//this.router.navigateByUrl("/history");


}
Withdrawal(){

  const username=this.homeForm.value.username;
  const password=this.homeForm.value.password;
  const amount=parseInt(this.homeForm.value.amount);
  
  //alert("deposit success")
this.bankService.Withdrawal(username,password,amount);
//this.router.navigateByUrl("/history");


}


}
