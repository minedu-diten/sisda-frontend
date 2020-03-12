import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


import { SisdaNavigationComponent } from './navigation.component';
import { SisdaNavVerticalItemComponent } from './vertical/item/item.component';
import { SisdaNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { SisdaNavVerticalGroupComponent } from './vertical/group/group.component';
import { SisdaNavHorizontalItemComponent } from './horizontal/item/item.component';
import { SisdaNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatRippleModule,
    ],
    exports     : [
        SisdaNavigationComponent
    ],
    declarations: [
        SisdaNavigationComponent,
        SisdaNavVerticalGroupComponent,
        SisdaNavVerticalItemComponent,
        SisdaNavVerticalCollapsableComponent,
        SisdaNavHorizontalItemComponent,
        SisdaNavHorizontalCollapsableComponent
    ]
})
export class SisdaNavigationModule
{
}
