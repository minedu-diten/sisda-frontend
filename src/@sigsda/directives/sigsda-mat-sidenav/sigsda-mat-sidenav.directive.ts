import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SigsdaMatchMediaService } from '@sigsda/services/match-media.service';
import { SigsdaMatSidenavHelperService } from '@sigsda/directives/sigsda-mat-sidenav/sigsda-mat-sidenav.service';

@Directive({
    selector: '[sigsdaMatSidenavHelper]'
})
export class SigsdaMatSidenavHelperDirective implements OnInit, OnDestroy {
    @HostBinding('class.mat-is-locked-open')
    isLockedOpen: boolean;

    @Input()
    sigsdaMatSidenavHelper: string;
    @Input()
    matIsLockedOpen: string;
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _sigsdaMatchMediaService: SigsdaMatchMediaService,
        private _sigsdaMatSidenavHelperService: SigsdaMatSidenavHelperService,
        private _matSidenav: MatSidenav,
        private _mediaObserver: MediaObserver
    ) {
        this.isLockedOpen = true;
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._sigsdaMatSidenavHelperService.setSidenav(this.sigsdaMatSidenavHelper, this._matSidenav);
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

        this._sigsdaMatchMediaService.onMediaChange
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
    selector: '[sigsdaMatSidenavToggler]'
})
export class SigsdaMatSidenavTogglerDirective {
    @Input()
    sigsdaMatSidenavToggler: string;


    constructor(private _sigsdaMatSidenavHelperService: SigsdaMatSidenavHelperService) {
    }

    @HostListener('click')
    onClick(): void {
        this._sigsdaMatSidenavHelperService.getSidenav(this.sigsdaMatSidenavToggler).toggle();
    }
}
