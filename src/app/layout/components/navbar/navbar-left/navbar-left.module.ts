import { NgModule } from '@angular/core';
import { NavbarLeftComponent } from './navbar-left.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SigsdaSharedModule } from '@sigsda/shared.module';
import { SigsdaNavigationModule } from '@sigsda/components';



@NgModule({
  declarations: [NavbarLeftComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    SigsdaSharedModule,
    SigsdaNavigationModule
  ],
  exports: [NavbarLeftComponent]
})
export class NavbarLeftModule { }
