import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


import { SigsdaNavigationComponent } from './navigation.component';
import { SigsdaNavVerticalItemComponent } from './vertical/item/item.component';
import { SigsdaNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { SigsdaNavVerticalGroupComponent } from './vertical/group/group.component';
import { SigsdaNavHorizontalItemComponent } from './horizontal/item/item.component';
import { SigsdaNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatRippleModule,
    ],
    exports     : [
        SigsdaNavigationComponent
    ],
    declarations: [
        SigsdaNavigationComponent,
        SigsdaNavVerticalGroupComponent,
        SigsdaNavVerticalItemComponent,
        SigsdaNavVerticalCollapsableComponent,
        SigsdaNavHorizontalItemComponent,
        SigsdaNavHorizontalCollapsableComponent
    ]
})
export class SigsdaNavigationModule
{
}
