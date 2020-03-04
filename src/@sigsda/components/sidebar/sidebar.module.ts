import { NgModule } from '@angular/core';

import { SigsdaSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        SigsdaSidebarComponent
    ],
    exports     : [
        SigsdaSidebarComponent
    ]
})
export class SigsdaSidebarModule
{
}
