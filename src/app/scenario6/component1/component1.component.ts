import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario6-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  public mes = '';

  constructor() { }

  ngOnInit() {
  }

  emi(text) {
    this.mes = text;
  }

}
