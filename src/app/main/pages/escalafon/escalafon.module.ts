import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscalafonListComponent } from './escalafon-list/escalafon-list.component';
import { EscalafonRoutingModule } from './escalafon-routing.module';
import { MaterialModule } from 'app/material/material.module';



@NgModule({
  declarations: [EscalafonListComponent],
  imports: [
    CommonModule,
    EscalafonRoutingModule,
    MaterialModule
  ]
})
export class EscalafonModule { }
