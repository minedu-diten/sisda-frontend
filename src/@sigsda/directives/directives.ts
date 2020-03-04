import { NgModule } from '@angular/core';

import { SigsdaIfOnDomDirective } from '@sigsda/directives/sigsda-if-on-dom/sigsda-if-on-dom.directive';
import { SigsdaInnerScrollDirective } from '@sigsda/directives/sigsda-inner-scroll/sigsda-inner-scroll.directive';
import { SigsdaPerfectScrollbarDirective } from '@sigsda/directives/sigsda-perfect-scrollbar/sigsda-perfect-scrollbar.directive';
import { SigsdaMatSidenavHelperDirective, SigsdaMatSidenavTogglerDirective } from '@sigsda/directives/sigsda-mat-sidenav/sigsda-mat-sidenav.directive';

@NgModule({
    declarations: [
        SigsdaIfOnDomDirective,
        SigsdaInnerScrollDirective,
        SigsdaMatSidenavHelperDirective,
        SigsdaMatSidenavTogglerDirective,
        SigsdaPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        SigsdaIfOnDomDirective,
        SigsdaInnerScrollDirective,
        SigsdaMatSidenavHelperDirective,
        SigsdaMatSidenavTogglerDirective,
        SigsdaPerfectScrollbarDirective
    ]
})
export class SigsdaDirectivesModule
{
}
