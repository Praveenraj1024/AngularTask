import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component1Component } from './component1/component1.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [Component1Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Component1Component
  ]
})
export class Scenario2Module { }
