import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

  //take data from route ....use ActivatedRoute
  //take parameters from route
  constructor(private route:ActivatedRoute,private bankService:BankService) { 
    
  this.route.paramMap.subscribe((params:any)=>{
    console.log(params)
   //alert(params.params.id)
   const userId=params.params.id;
        // bankService.getOneUser(userId)
        // .subscribe((data:any)=>{
          
        //   this.profileForm.patchValue({
        //     username:data.username,
        //     accountno:data.accno,
        //     balance:data.bal
        //   })
        // });


  })
  }
  

  ngOnInit(): void {
  }

}
