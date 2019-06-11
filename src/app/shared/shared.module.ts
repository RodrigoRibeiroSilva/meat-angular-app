import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [InputComponent, RadioComponent],
  exports: [InputComponent, RadioComponent, FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
