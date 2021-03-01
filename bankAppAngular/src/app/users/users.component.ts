import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:{accno:string,bal:string,username:string}[]= [];
  constructor(private bankService:BankService,private router:Router) {

   
   bankService.getUsers()
    .subscribe((data:any)=>{
      //console.log(data)
       this.users=data;
     
    });
    
   }



  ngOnInit(): void {
  }


  edit(item:any)
  {
    //this.router.navigateByUrl("/users/"+item._id)
    this.router.navigate(["users",item._id])
  }



}
