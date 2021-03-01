import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';
import { Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  profileForm=this.fb.group({

    username:["" ,[Validators.required]],
    accountno:["" ,[Validators.required]],
    balance:["" ,[Validators.required]]
  
  })
  //profile:any={}

  constructor(private router:Router ,private bankService:BankService,private fb:FormBuilder) {
    
    bankService.getProfile()
    .subscribe((data:any)=>{
      
      this.profileForm.patchValue({
        username:data.username,
        accountno:data.accno,
        balance:data.bal
      })

      //this.profile=data;
      //console.log(data)
      //exsisting form updation -patchValue
    });

            // bankService.getenquiry(11111111)
            // .subscribe((data:any)=>{
              
            //   this.profileForm.patchValue({
            //     username:data.username,
            //     accountno:data.accno,
            //     balance:data.bal
            //   })

            // });
   }

  ngOnInit(): void {
  }

  UpdateProfile(){

    if(this.profileForm.valid==false){


      alert("form is invalid")
    }
    else{

      const username=this.profileForm.value.username;
      const accountno=this.profileForm.value.accountno;
      const balance=this.profileForm.value.balance;

      this.bankService.UpdateProfile(username,accountno,balance)
      .subscribe((data:any)=>{

        alert(data.message);
       // console.log(data);
      
    
         })
    
    }

    
  }
}
