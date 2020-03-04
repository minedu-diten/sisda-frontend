import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SigsdaSharedModule } from '@sigsda/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        RouterModule,
        SigsdaSharedModule
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {
}
