import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SisdaNavigationItem } from '@sisda/types';
import { SisdaNavigationService } from '@sisda/components/navigation/navigation.service';

@Component({
    selector   : 'sisda-nav-vertical-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class SisdaNavVerticalItemComponent implements OnInit, OnDestroy
{
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: SisdaNavigationItem;
    private _unsubscribeAll: Subject<any>;
  
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _sisdaNavigationService: SisdaNavigationService
    )
    {
        this._unsubscribeAll = new Subject();
    }
    
    ngOnInit(): void
    {
        merge(
            this._sisdaNavigationService.onNavigationItemAdded,
            this._sisdaNavigationService.onNavigationItemUpdated,
            this._sisdaNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
         .subscribe(() => {
             this._changeDetectorRef.markForCheck();
         });
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
