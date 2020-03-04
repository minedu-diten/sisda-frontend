import { NgModule } from '@angular/core';

import { SigsdaWidgetComponent } from './widget.component';
import { SigsdaWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        SigsdaWidgetComponent,
        SigsdaWidgetToggleDirective
    ],
    exports     : [
        SigsdaWidgetComponent,
        SigsdaWidgetToggleDirective
    ],
})
export class SigsdaWidgetModule
{
}
