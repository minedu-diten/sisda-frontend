import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SisdaMatchMediaService } from '@sisda/services/match-media.service';

@Directive({
    selector: '.inner-scroll'
})
export class SisdaInnerScrollDirective implements OnInit, OnDestroy {
    private _parent: any;
    private _grandParent: any;
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _elementRef: ElementRef,
        private _sisdaMediaMatchService: SisdaMatchMediaService,
        private _renderer: Renderer2
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._parent = this._renderer.parentNode(this._elementRef.nativeElement);
        if (!this._parent) {
            return;
        }
        this._grandParent = this._renderer.parentNode(this._parent);

        this._sisdaMediaMatchService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((alias) => {
                if (alias === 'xs') {
                    this._removeClass();
                }
                else {
                    this._addClass();
                }
            });
    }

    ngOnDestroy(): void {
        if (!this._parent) { return; }
        this._removeClass();
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
   
    private _addClass(): void {
        this._renderer.addClass(this._grandParent, 'inner-scroll');
    }

    private _removeClass(): void {
        this._renderer.removeClass(this._grandParent, 'inner-scroll');
    }
}
