import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SiblingMessageService {
  private sub = new Subject();
  constructor() { }

  send(text) {
    this.sub.next(text);
  }

  gett() {
    return this.sub.asObservable();
  }
}
