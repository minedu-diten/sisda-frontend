import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SisdaMatchMediaService } from '@sisda/services/match-media.service';
import { SisdaMatSidenavHelperService } from '@sisda/directives/sisda-mat-sidenav/sisda-mat-sidenav.service';

@Directive({
    selector: '[sisdaMatSidenavHelper]'
})
export class SisdaMatSidenavHelperDirective implements OnInit, OnDestroy {
    @HostBinding('class.mat-is-locked-open')
    isLockedOpen: boolean;

    @Input()
    sisdaMatSidenavHelper: string;
    @Input()
    matIsLockedOpen: string;
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _sisdaMatchMediaService: SisdaMatchMediaService,
        private _sisdaMatSidenavHelperService: SisdaMatSidenavHelperService,
        private _matSidenav: MatSidenav,
        private _mediaObserver: MediaObserver
    ) {
        this.isLockedOpen = true;
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._sisdaMatSidenavHelperService.setSidenav(this.sisdaMatSidenavHelper, this._matSidenav);
        if (this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen)) {
            this.isLockedOpen = true;
            this._matSidenav.mode = 'side';
            this._matSidenav.toggle(true);
        }
        else {
            this.isLockedOpen = false;
            this._matSidenav.mode = 'over';
            this._matSidenav.toggle(false);
        }

        this._sisdaMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if (this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen)) {
                    this.isLockedOpen = true;
                    this._matSidenav.mode = 'side';
                    this._matSidenav.toggle(true);
                }
                else {
                    this.isLockedOpen = false;
                    this._matSidenav.mode = 'over';
                    this._matSidenav.toggle(false);
                }
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

@Directive({
    selector: '[sisdaMatSidenavToggler]'
})
export class SisdaMatSidenavTogglerDirective {
    @Input()
    sisdaMatSidenavToggler: string;


    constructor(private _sisdaMatSidenavHelperService: SisdaMatSidenavHelperService) {
    }

    @HostListener('click')
    onClick(): void {
        this._sisdaMatSidenavHelperService.getSidenav(this.sisdaMatSidenavToggler).toggle();
    }
}
