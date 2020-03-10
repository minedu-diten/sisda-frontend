import { Component, OnDestroy, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';

import { SigsdaConfigService } from '@sigsda/services/config.service';
import { SigsdaSidebarService } from '@sigsda/components/sidebar/sidebar.service';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent implements OnInit, OnDestroy {
    rightNavbar: boolean;
    hiddenNavbar: boolean;

    @Input()
    toolbarMenu: boolean = false;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _sigsdaConfigService: SigsdaConfigService,
        private _sigsdaSidebarService: SigsdaSidebarService,
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._sigsdaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleSidebarOpen(key): void {
        this._sigsdaSidebarService.getSidebar(key).toggleOpen();
    }
}
