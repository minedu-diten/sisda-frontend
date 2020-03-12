import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector   : 'sisda-nav-horizontal-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class SisdaNavHorizontalItemComponent
{
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: any;
       
    constructor()
    {

    }
}
