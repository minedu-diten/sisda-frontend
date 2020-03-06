import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { SigsdaConfigService } from '@sigsda/services/config.service';
import { SigsdaNavigationService } from '@sigsda/components/navigation/navigation.service';
import { SigsdaPerfectScrollbarDirective } from '@sigsda/directives/sigsda-perfect-scrollbar/sigsda-perfect-scrollbar.directive';
import { SigsdaSidebarService } from '@sigsda/components/sidebar/sidebar.service';

@Component({
    selector: 'sigsda-navbar-left',
    templateUrl: './navbar-left.component.html',
    styleUrls: ['./navbar-left.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarLeftComponent implements OnInit, OnDestroy {
    sigsdaConfig: any;
    navigation: any;

    private _sigsdaPerfectScrollbar: SigsdaPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _sigsdaConfigService: SigsdaConfigService,
        private _sigsdaNavigationService: SigsdaNavigationService,
        private _sigsdaSidebarService: SigsdaSidebarService,
        private _router: Router
    ) {
        this._unsubscribeAll = new Subject();
    }


    @ViewChild(SigsdaPerfectScrollbarDirective, { static: true })
    set directive(theDirective: SigsdaPerfectScrollbarDirective) {
        if (!theDirective) {
            return;
        }

        this._sigsdaPerfectScrollbar = theDirective;
        this._sigsdaNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._sigsdaPerfectScrollbar.update();
            });

        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                setTimeout(() => {
                    this._sigsdaPerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
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
                if (this._sigsdaSidebarService.getSidebar('navbar')) {
                    this._sigsdaSidebarService.getSidebar('navbar').close();
                }
            }
            );

        this._sigsdaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.sigsdaConfig = config;
            });

        this._sigsdaNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._sigsdaNavigationService.getCurrentNavigation();
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleSidebarOpened(): void {
        this._sigsdaSidebarService.getSidebar('navbar').toggleOpen();
    }

    toggleSidebarFolded(): void {
        this._sigsdaSidebarService.getSidebar('navbar').toggleFold();
    }
}
