import { NgModule } from '@angular/core';

import { SisdaSharedModule } from '@sisda/shared.module';

import { NavbarComponent } from 'app/layout/components/navbar/navbar.component';
import { NavbarLeftModule } from './navbar-left/navbar-left.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        SisdaSharedModule,
        NavbarLeftModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule {
}
