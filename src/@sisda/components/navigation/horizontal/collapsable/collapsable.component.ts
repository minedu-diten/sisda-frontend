import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { sisdaAnimations } from '@sisda/animations';
import { SisdaConfigService } from '@sisda/services/config.service';

@Component({
    selector: 'sisda-nav-horizontal-collapsable',
    templateUrl: './collapsable.component.html',
    styleUrls: ['./collapsable.component.scss'],
    animations: sisdaAnimations
})
export class SisdaNavHorizontalCollapsableComponent implements OnInit, OnDestroy {
    sisdaConfig: any;
    isOpen = false;

    @HostBinding('class')
    classes = 'nav-collapsable nav-item';

    @Input()
    item: any;

    private _unsubscribeAll: Subject<any>;

    constructor(private _sisdaConfigService: SisdaConfigService) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._sisdaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (config) => {
                    this.sisdaConfig = config;
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
