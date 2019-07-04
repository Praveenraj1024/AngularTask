import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-scenario4-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() public eventReference = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitter(text) {
    this.eventReference.emit(text);
  }

}
