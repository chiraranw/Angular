import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  templateVars(email: string): any { console.log(email); }

}
