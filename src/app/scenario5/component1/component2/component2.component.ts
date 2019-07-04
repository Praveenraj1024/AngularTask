import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Output() public eventReference = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emi(text) {
    this.eventReference.emit(text);
  }

}
