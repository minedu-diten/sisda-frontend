import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SigsdaSharedModule } from '@sigsda/shared.module';

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
    SigsdaSharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
