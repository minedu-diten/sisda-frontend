import { NgModule } from '@angular/core';

import { SigsdaSharedModule } from '@sigsda/shared.module';

import { NavbarComponent } from 'app/layout/components/navbar/navbar.component';
import { NavbarVerticalStyle1Module } from 'app/layout/components/navbar/vertical/style-1/style-1.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        SigsdaSharedModule,
        NavbarVerticalStyle1Module
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
