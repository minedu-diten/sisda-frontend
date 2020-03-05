import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'sigsda', pathMatch: 'full' },
    { path: 'sigsda', loadChildren: './pages/pages.module#PagesModule' },
    { path: 'sample', loadChildren: './sample/sample.module#SampleModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }