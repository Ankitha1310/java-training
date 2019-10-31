import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoonComponent } from './joon/joon.component';

@NgModule({
  declarations: [JoonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    JoonComponent,
  ]
})
export class KolaModule { }
