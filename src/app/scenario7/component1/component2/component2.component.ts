import { Component, OnInit } from '@angular/core';
import { SiblingMessageService } from '../../../services/sibling-message.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private ref: SiblingMessageService) { }

  ngOnInit() {
  }

  fun(text) {
    this.ref.send(text);
  }

}
