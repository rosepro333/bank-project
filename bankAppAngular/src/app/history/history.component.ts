import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  //object in array...here we know each type..that why we mentioned the type...
history:{amount:number,transactionType:string}[]  = []


  constructor(private bankService:BankService) 
  {

     this.history=bankService.getHistory();
     
   }

  ngOnInit(): void {
  }

}
