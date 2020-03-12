import { NgModule } from '@angular/core';
import { NavbarLeftComponent } from './navbar-left.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SisdaSharedModule } from '@sisda/shared.module';
import { SisdaNavigationModule } from '@sisda/components';



@NgModule({
  declarations: [NavbarLeftComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    SisdaSharedModule,
    SisdaNavigationModule
  ],
  exports: [NavbarLeftComponent]
})
export class NavbarLeftModule { }
