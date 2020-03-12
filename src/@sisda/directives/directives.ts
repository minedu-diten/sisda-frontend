import { NgModule } from '@angular/core';

import { SisdaIfOnDomDirective } from '@sisda/directives/sisda-if-on-dom/sisda-if-on-dom.directive';
import { SisdaInnerScrollDirective } from '@sisda/directives/sisda-inner-scroll/sisda-inner-scroll.directive';
import { SisdaPerfectScrollbarDirective } from '@sisda/directives/sisda-perfect-scrollbar/sisda-perfect-scrollbar.directive';
import { SisdaMatSidenavHelperDirective, SisdaMatSidenavTogglerDirective } from '@sisda/directives/sisda-mat-sidenav/sisda-mat-sidenav.directive';

@NgModule({
    declarations: [
        SisdaIfOnDomDirective,
        SisdaInnerScrollDirective,
        SisdaMatSidenavHelperDirective,
        SisdaMatSidenavTogglerDirective,
        SisdaPerfectScrollbarDirective
    ],
    imports: [],
    exports: [
        SisdaIfOnDomDirective,
        SisdaInnerScrollDirective,
        SisdaMatSidenavHelperDirective,
        SisdaMatSidenavTogglerDirective,
        SisdaPerfectScrollbarDirective
    ]
})
export class SisdaDirectivesModule {
}
