import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-madlibform',
  templateUrl: './madlibform.component.html',
  styleUrls: ['./madlibform.component.css']
})
export class MadlibformComponent implements OnInit {
  
  madlibForm: FormGroup;
  isCompleted:boolean;
  @Input() firstAdj:string;
  @Input() firstVerb:string;
  @Input() secondAdj:string;
  @Input() firstAdv:string;
  @Input() secondVerb:string;

  constructor(private formBuilder: FormBuilder) {
    this.isCompleted = false;
   }

  ngOnInit() {
    this.madlibForm = this.formBuilder.group({
      firstAdj:[this.firstAdj, Validators.required],
      firstVerb:[this.firstVerb,Validators.required],
      secondAdj:[this.secondAdj,Validators.required],
      firstAdv:[this.firstAdv, Validators.required],
      secondVerb:[this.secondVerb,Validators.required]
    });
  }
    
  save(){
    this.isCompleted =!this.isCompleted;
    const value = this.madlibForm.value;
    this.firstAdj = value.firstAdj;
    this.firstVerb = value.firstVerb;
    this.secondAdj = value.secondAdj;
    this.firstAdv = value.firstAdv;
    this.secondVerb = value.secondVerb;

    
  }
  reset() {
    this.isCompleted = false;
    this.madlibForm.patchValue({
    firstAdj : '',
    firstVerb : '',
    secondAdj : '',
    firstAdv : '',
    secondVerb : ''
  }
    )

  }

  

}
