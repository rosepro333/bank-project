import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
 //openclose animation name------animation starts with this name
  animations:[
    trigger('openclose',[

      state('open',style({
        height:'200px',
        backgroundColor:'yellow',
        opacity:1
      })),

      state('closed',style({
        height:'100px',
        backgroundColor:'green',
        opacity:.5
      })),

      transition('open=>closed',[
        animate('1s')
      ]),

      transition('closed=>open',[
        animate('2s')
      ])

    ])
  ]
})
export class AnimationsComponent implements OnInit {
isOpen=false;
  constructor() { }

  ngOnInit(): void {
  }

  
  toggle(){

    this.isOpen=!this.isOpen
   
    }
}
