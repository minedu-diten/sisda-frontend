import { NgModule } from '@angular/core';

import { SigsdaSharedModule } from '@sigsda/shared.module';

import { NavbarComponent } from 'app/layout/components/navbar/navbar.component';
import { NavbarLeftModule } from './navbar-left/navbar-left.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        SigsdaSharedModule,
        NavbarLeftModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
