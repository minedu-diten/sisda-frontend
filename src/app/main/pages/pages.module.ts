import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { EscalafonModule } from './escalafon/escalafon.module';
import { SigsdaSharedModule } from '@sigsda/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    EscalafonModule,
    SigsdaSharedModule
  ]
})
export class PagesModule { }
