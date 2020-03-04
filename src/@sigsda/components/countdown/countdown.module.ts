import { NgModule } from '@angular/core';

import { SigsdaCountdownComponent } from '@sigsda/components/countdown/countdown.component';

@NgModule({
    declarations: [
        SigsdaCountdownComponent
    ],
    exports: [
        SigsdaCountdownComponent
    ],
})
export class SigsdaCountdownModule
{
}
