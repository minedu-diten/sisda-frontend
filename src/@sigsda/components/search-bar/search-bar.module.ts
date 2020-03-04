import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SigsdaSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        SigsdaSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        SigsdaSearchBarComponent
    ]
})
export class SigsdaSearchBarModule
{
}
