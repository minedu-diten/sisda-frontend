import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { SigsdaDemoContentComponent } from './demo-content/demo-content.component';
import { SigsdaDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        SigsdaDemoContentComponent,
        SigsdaDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        SigsdaDemoContentComponent,
        SigsdaDemoSidebarComponent
    ]
})
export class SigsdaDemoModule
{
}
