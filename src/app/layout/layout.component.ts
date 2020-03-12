import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SisdaConfigService } from '@sisda/services/config.service';
import { navigation } from 'app/config/navigation';

@Component({
    selector: 'sisda-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy {
    sisdaConfig: any;
    navigation: any;
    private _unsubscribeAll: Subject<any>;

    constructor(private _sisdaConfigService: SisdaConfigService) {
        this.navigation = navigation;
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._sisdaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.sisdaConfig = config;
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
