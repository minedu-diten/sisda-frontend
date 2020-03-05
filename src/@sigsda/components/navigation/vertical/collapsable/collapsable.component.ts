import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { SigsdaNavigationItem } from '@sigsda/types';
import { sigsdaAnimations } from '@sigsda/animations';
import { SigsdaNavigationService } from '@sigsda/components/navigation/navigation.service';

@Component({
    selector: 'sigsda-nav-vertical-collapsable',
    templateUrl: './collapsable.component.html',
    styleUrls: ['./collapsable.component.scss'],
    animations: sigsdaAnimations
})
export class SigsdaNavVerticalCollapsableComponent implements OnInit, OnDestroy {
    @Input()
    item: SigsdaNavigationItem;

    @HostBinding('class')
    classes = 'nav-collapsable nav-item';

    @HostBinding('class.open')
    public isOpen = false;
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _sigsdaNavigationService: SigsdaNavigationService,
        private _router: Router
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((event: NavigationEnd) => {
                if (this.isUrlInChildren(this.item, event.urlAfterRedirects)) {
                    this.expand();
                }
                else {
                    this.collapse();
                }
            });

        this._sigsdaNavigationService.onItemCollapsed
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (clickedItem) => {
                    if (clickedItem && clickedItem.children) {
                        if (this.isChildrenOf(this.item, clickedItem)) {
                            return;
                        }

                        if (this.isUrlInChildren(this.item, this._router.url)) {
                            return;
                        }

                        if (this.item !== clickedItem) {
                            this.collapse();
                        }
                    }
                }
            );

        if (this.isUrlInChildren(this.item, this._router.url)) {
            this.expand();
        }
        else {
            this.collapse();
        }
        merge(
            this._sigsdaNavigationService.onNavigationItemAdded,
            this._sigsdaNavigationService.onNavigationItemUpdated,
            this._sigsdaNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this._changeDetectorRef.markForCheck();
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleOpen(ev): void {
        ev.preventDefault();
        this.isOpen = !this.isOpen;
        this._sigsdaNavigationService.onItemCollapsed.next(this.item);
        this._sigsdaNavigationService.onItemCollapseToggled.next();
    }

    expand(): void {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        this._changeDetectorRef.markForCheck();
        this._sigsdaNavigationService.onItemCollapseToggled.next();
    }

    collapse(): void {
        if (!this.isOpen) {
            return;
        }
        this.isOpen = false;
        this._changeDetectorRef.markForCheck();
        this._sigsdaNavigationService.onItemCollapseToggled.next();
    }

    isChildrenOf(parent, item): boolean {
        const children = parent.children;
        if (!children) {
            return false;
        }

        if (children.indexOf(item) > -1) {
            return true;
        }

        for (const child of children) {
            if (child.children) {
                if (this.isChildrenOf(child, item)) {
                    return true;
                }
            }
        }

        return false;
    }

    isUrlInChildren(parent, url): boolean {
        const children = parent.children;
        if (!children) {
            return false;
        }
        for (const child of children) {
            if (child.children) {
                if (this.isUrlInChildren(child, url)) {
                    return true;
                }
            }
            if (child.url === url || url.includes(child.url)) {
                return true;
            }
        }
        return false;
    }

}
