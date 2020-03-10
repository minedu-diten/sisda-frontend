import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SigsdaSharedModule } from '@sigsda/shared.module';
import { ToolbarModule } from 'app/layout/components/toolbar/toolbar.module';
import { FooterModule } from 'app/layout/components/footer/footer.module';
import { MaterialModule } from 'app/material/material.module';

const routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes), 
    SigsdaSharedModule,
    ToolbarModule,
    FooterModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
