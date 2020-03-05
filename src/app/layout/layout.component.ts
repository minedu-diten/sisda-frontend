import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SigsdaConfigService } from '@sigsda/services/config.service';
import { navigation } from 'app/config/navigation';

@Component({
    selector: 'sigsda-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy {
    sigsdaConfig: any;
    navigation: any;
    private _unsubscribeAll: Subject<any>;

    constructor(private _sigsdaConfigService: SigsdaConfigService) {
        this.navigation = navigation;
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {

        this._sigsdaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.sigsdaConfig = config;
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
