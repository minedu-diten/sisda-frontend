import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { EscalafonModule } from './escalafon/escalafon.module';
import { SisdaSharedModule } from '@sisda/shared.module';
import { ButtonCancelComponent } from '../components/button-cancel/button-cancel.component';
import { ButtonSaveComponent } from '../components/button-save/button-save.component';
import { ButtonDeleteComponent } from '../components/button-delete/button-delete.component';



@NgModule({
  declarations: [ButtonCancelComponent, ButtonSaveComponent, ButtonDeleteComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    EscalafonModule,
    SisdaSharedModule
  ]
})
export class PagesModule { }
