import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SigsdaSharedModule } from '@sigsda/shared.module';

import { SampleComponent } from './sample.component';

const routes = [
    {
        path     : '',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        SigsdaSharedModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
