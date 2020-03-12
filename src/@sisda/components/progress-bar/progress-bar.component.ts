import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SisdaProgressBarService } from '@sisda/components/progress-bar/progress-bar.service';

@Component({
    selector: 'sisda-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SisdaProgressBarComponent implements OnInit, OnDestroy {
    bufferValue: number;
    mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
    value: number;
    visible: boolean;
    private _unsubscribeAll: Subject<any>;

    constructor(private _sisdaProgressBarService: SisdaProgressBarService) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._sisdaProgressBarService.bufferValue
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((bufferValue) => {
                this.bufferValue = bufferValue;
            });
        this._sisdaProgressBarService.mode
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mode) => {
                this.mode = mode;
            });

        this._sisdaProgressBarService.value
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.value = value;
            });

        this._sisdaProgressBarService.visible
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((visible) => {
                this.visible = visible;
            });

    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
