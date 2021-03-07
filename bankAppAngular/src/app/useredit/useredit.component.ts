import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../services/bank.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  profileForm=this.fb.group({

    username:["" ,[Validators.required]],
    accountno:["" ,[Validators.required]],
    balance:["" ,[Validators.required]]
  
  })

  //take data from route ....use ActivatedRoute
  //take parameters from route
  constructor(private router:Router,private route:ActivatedRoute,private bankService:BankService,private fb:FormBuilder) 
  { 
    
  this.route.paramMap.subscribe((params:any)=>{
    console.log(params)
   //alert(params.params.id)
   const userId=params.params.id;
    console.log(userId)   
   
   this.bankService.getUserProfile(userId)
   
     .subscribe((data:any)=>{
       console.log(data)
      
      this.profileForm.patchValue({
         username:data.username,
         accountno:data.accno,
         balance:data.bal
        })

    });


  })
  }
  

  ngOnInit(): void {
  }

}
