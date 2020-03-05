import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscalafonListComponent } from './escalafon-list/escalafon-list.component';

const routes: Routes = [
    {
        path: '',
        component: EscalafonListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EscalafonRoutingModule { }
