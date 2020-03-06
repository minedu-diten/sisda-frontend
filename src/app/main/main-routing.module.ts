import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'sisda', loadChildren: './pages/pages.module#PagesModule' },
    { path: 'auth', loadChildren: './login/login.module#LoginModule' },
    { path: 'menu', loadChildren: './home/home.module#HomeModule' },
    { path: 'sample', loadChildren: './sample/sample.module#SampleModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }