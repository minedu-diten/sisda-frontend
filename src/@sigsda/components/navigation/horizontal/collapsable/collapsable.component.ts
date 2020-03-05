import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { sigsdaAnimations } from '@sigsda/animations';
import { SigsdaConfigService } from '@sigsda/services/config.service';

@Component({
    selector: 'sigsda-nav-horizontal-collapsable',
    templateUrl: './collapsable.component.html',
    styleUrls: ['./collapsable.component.scss'],
    animations: sigsdaAnimations
})
export class SigsdaNavHorizontalCollapsableComponent implements OnInit, OnDestroy {
    sigsdaConfig: any;
    isOpen = false;

    @HostBinding('class')
    classes = 'nav-collapsable nav-item';

    @Input()
    item: any;

    private _unsubscribeAll: Subject<any>;

    constructor(private _sigsdaConfigService: SigsdaConfigService) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._sigsdaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (config) => {
                    this.sigsdaConfig = config;
                }
            );
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    @HostListener('mouseenter')
    open(): void {
        this.isOpen = true;
    }

    @HostListener('mouseleave')
    close(): void {
        this.isOpen = false;
    }
}
