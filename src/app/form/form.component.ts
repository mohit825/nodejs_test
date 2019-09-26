import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm : FormGroup
  constructor() { }
  @Output() formValueChild = new EventEmitter;


  ngOnInit() {

    this.userForm = new FormGroup({
      userId : new FormControl('' , Validators.required),
      userName : new FormControl('' , Validators.required)
    })

  }


  onSubmit(data){
    console.log(data);
    this.formValueChild.emit(data);
  }
}
