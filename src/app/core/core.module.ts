import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentFakturaGuard } from './guards/curretFaktura.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CurrentFakturaGuard,
  ]
})
export class CoreModule { }
