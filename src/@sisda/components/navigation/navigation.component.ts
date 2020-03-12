import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SisdaNavigationService } from '@sisda/components/navigation/navigation.service';

@Component({
    selector       : 'sisda-navigation',
    templateUrl    : './navigation.component.html',
    styleUrls      : ['./navigation.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SisdaNavigationComponent implements OnInit
{  
    @Input()
    navigation: any;
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
        this.navigation = this.navigation || this._sisdaNavigationService.getCurrentNavigation();
        this._sisdaNavigationService.onNavigationChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.navigation = this._sisdaNavigationService.getCurrentNavigation();
                this._changeDetectorRef.markForCheck();
            });
        merge(
            this._sisdaNavigationService.onNavigationItemAdded,
            this._sisdaNavigationService.onNavigationItemUpdated,
            this._sisdaNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
         .subscribe(() => {
             this._changeDetectorRef.markForCheck();
         });
    }
}
