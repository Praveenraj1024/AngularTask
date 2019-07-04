import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  @Output() public emitterReference = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitter(text) {
    this.emitterReference.emit(text);
  }

}
