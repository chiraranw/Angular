import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-re-usable-card',
  templateUrl: './re-usable-card.component.html',
  styleUrls: ['./re-usable-card.component.css']
})
export class ReUsableCardComponent implements OnInit {
  @Input() heading: string;
  constructor() { }
  ngOnInit() {
  }
}

