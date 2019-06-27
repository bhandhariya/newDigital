import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberWithLengthDirective } from './number.directive';

@NgModule({
  declarations: [OnlyNumberWithLengthDirective],
  imports: [ CommonModule ],
  exports:[ OnlyNumberWithLengthDirective ]
})
export class NumberModule { }