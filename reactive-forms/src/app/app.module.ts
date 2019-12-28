import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncValidatorsComponent } from './async-validators/async-validators.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    AsyncValidatorsComponent,
    ChangePasswordFormComponent,

  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
