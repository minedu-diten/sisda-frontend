import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SigsdaNavigationService } from '@sigsda/components/navigation/navigation.service';

@Component({
    selector       : 'sigsda-navigation',
    templateUrl    : './navigation.component.html',
    styleUrls      : ['./navigation.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigsdaNavigationComponent implements OnInit
{  
    @Input()
    navigation: any;
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
        this.navigation = this.navigation || this._sigsdaNavigationService.getCurrentNavigation();
        this._sigsdaNavigationService.onNavigationChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.navigation = this._sigsdaNavigationService.getCurrentNavigation();
                this._changeDetectorRef.markForCheck();
            });
        merge(
            this._sigsdaNavigationService.onNavigationItemAdded,
            this._sigsdaNavigationService.onNavigationItemUpdated,
            this._sigsdaNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
         .subscribe(() => {
             this._changeDetectorRef.markForCheck();
         });
    }
}
