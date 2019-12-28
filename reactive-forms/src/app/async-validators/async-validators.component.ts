import { CustomValidators } from './../validators/validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-async-validators',
  templateUrl: './async-validators.component.html',
  styleUrls: ['./async-validators.component.css']
})
export class AsyncValidatorsComponent {

  public asyncValForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.asyncValForm = formBuilder.group({
      firstName: [null, Validators.required, CustomValidators.uniqueName]
    });
  }

  public get firstName() { return this.asyncValForm.get('firstName'); }



}
