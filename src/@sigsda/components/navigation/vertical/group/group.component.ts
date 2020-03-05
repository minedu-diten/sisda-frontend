import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SigsdaNavigationItem } from '@sigsda/types';
import { SigsdaNavigationService } from '@sigsda/components/navigation/navigation.service';

@Component({
    selector   : 'sigsda-nav-vertical-group',
    templateUrl: './group.component.html',
    styleUrls  : ['./group.component.scss']
})
export class SigsdaNavVerticalGroupComponent implements OnInit, OnDestroy
{
    @HostBinding('class')
    classes = 'nav-group nav-item';

    @Input()
    item: SigsdaNavigationItem;
    
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _sigsdaNavigationService: SigsdaNavigationService
    )
    {
        this._unsubscribeAll = new Subject();
    }
  
    ngOnInit(): void
    {
        merge(
            this._sigsdaNavigationService.onNavigationItemAdded,
            this._sigsdaNavigationService.onNavigationItemUpdated,
            this._sigsdaNavigationService.onNavigationItemRemoved
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
