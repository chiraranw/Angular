import { CustomValidators } from './../validators/validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  conatctForm;

  constructor(cForm: FormBuilder) {
    this.conatctForm = cForm.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'surname': ['', Validators.compose([Validators.required, CustomValidators.cannotContainSpace, Validators.minLength(4)])]
    });
  }

  get name() { return this.conatctForm.get('name'); }
  get surname() { return this.conatctForm.get('surname'); }



}
