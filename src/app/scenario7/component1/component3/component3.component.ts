import { Component, OnInit } from '@angular/core';
import { SiblingMessageService } from '../../../services/sibling-message.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  public message;

  constructor(private ref: SiblingMessageService) { }

  ngOnInit() {
    this.ref.gett().subscribe(mes => this.message = mes);
  }



}
