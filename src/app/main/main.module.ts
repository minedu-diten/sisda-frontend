import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from 'app/material/material.module';
import { SampleModule } from './sample/sample.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    SampleModule,
    PagesModule
  ]
})
export class MainModule { }
