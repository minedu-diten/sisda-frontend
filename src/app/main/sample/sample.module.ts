import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SisdaSharedModule } from '@sisda/shared.module';

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
        SisdaSharedModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
