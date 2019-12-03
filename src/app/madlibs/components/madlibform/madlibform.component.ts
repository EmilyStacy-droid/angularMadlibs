import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-madlibform',
  templateUrl: './madlibform.component.html',
  styleUrls: ['./madlibform.component.css']
})
export class MadlibformComponent implements OnInit {
  isCompleted:boolean;
  firstAdj:string;
  firstVerb:string;
  secondAdj:string;
  firstAdv:string;
  secondVerb:string;

  constructor() {
    this.isCompleted = false;
   }

  ngOnInit() {
    
  }

  reset() {
    this.isCompleted = false;
    this.firstAdj = '';
    this.firstVerb = '';
    this.secondAdj = '';
    this.firstAdv = '';
    this.secondVerb = '';

  }

  

}
