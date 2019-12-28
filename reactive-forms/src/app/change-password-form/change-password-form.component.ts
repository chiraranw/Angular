import { CustomValidators } from './../validators/validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  public form: FormGroup;
  constructor(f: FormBuilder) {
    this.form = f.group({
      oldPassword: [null, Validators.required, CustomValidators.validOldPassword],
      newPassword: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    }, { validator: CustomValidators.passwordsMustMatch });
  }

  public get oldPassword() { return this.form.get('oldPassword'); }
  public get newPassword() { return this.form.get('newPassword'); }
  public get confirmPassword() { return this.form.get('confirmPassword'); }
  public passwordMatch(value: string): boolean {
    console.log(this.form.get('newPassword').value);
    return (value === this.form.get('newPassword').value);
  }



}
