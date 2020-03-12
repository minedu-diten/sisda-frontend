import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { SisdaConfigService } from '@sisda/services/config.service';
import { SisdaNavigationService } from '@sisda/components/navigation/navigation.service';
import { SisdaPerfectScrollbarDirective } from '@sisda/directives/sisda-perfect-scrollbar/sisda-perfect-scrollbar.directive';
import { SisdaSidebarService } from '@sisda/components/sidebar/sidebar.service';

@Component({
    selector: 'sisda-navbar-left',
    templateUrl: './navbar-left.component.html',
    styleUrls: ['./navbar-left.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarLeftComponent implements OnInit, OnDestroy {
    sisdaConfig: any;
    navigation: any;

    private _sisdaPerfectScrollbar: SisdaPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _sisdaConfigService: SisdaConfigService,
        private _sisdaNavigationService: SisdaNavigationService,
        private _sisdaSidebarService: SisdaSidebarService,
        private _router: Router
    ) {
        this._unsubscribeAll = new Subject();
    }


    @ViewChild(SisdaPerfectScrollbarDirective, { static: true })
    set directive(theDirective: SisdaPerfectScrollbarDirective) {
        if (!theDirective) {
            return;
        }

        this._sisdaPerfectScrollbar = theDirective;
        this._sisdaNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._sisdaPerfectScrollbar.update();
            });

        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                setTimeout(() => {
                    this._sisdaPerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
                });
            }
            );
    }

    ngOnInit(): void {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                if (this._sisdaSidebarService.getSidebar('navbar')) {
                    this._sisdaSidebarService.getSidebar('navbar').close();
                }
            }
            );

        this._sisdaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.sisdaConfig = config;
            });

        this._sisdaNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._sisdaNavigationService.getCurrentNavigation();
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleSidebarOpened(): void {
        this._sisdaSidebarService.getSidebar('navbar').toggleOpen();
    }

    toggleSidebarFolded(): void {
        this._sisdaSidebarService.getSidebar('navbar').toggleFold();
    }
}
