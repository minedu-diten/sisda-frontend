import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SisdaConfigService } from '@sisda/services/config.service';
import { SisdaNavigationService } from '@sisda/components/navigation/navigation.service';
import { SisdaSidebarService } from '@sisda/components/sidebar/sidebar.service';
import { SisdaSplashScreenService } from '@sisda/services/splash-screen.service';

import { navigation } from 'app/config/navigation';

@Component({
    selector   : 'sisda',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    sisdaConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;
  
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _sisdaConfigService: SisdaConfigService,
        private _sisdaNavigationService: SisdaNavigationService,
        private _sisdaSidebarService: SisdaSidebarService,
        private _sisdaSplashScreenService: SisdaSplashScreenService,
        private _platform: Platform
    )
    {
        // Get default navigation
        this.navigation = navigation;

        // Register the navigation to the service
        this._sisdaNavigationService.register('main', this.navigation);

        // Set the main navigation as our current navigation
        this._sisdaNavigationService.setCurrentNavigation('main');

        
        // Add is-mobile class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

   
    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._sisdaConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {

                this.sisdaConfig = config;

                // Boxed
                if ( this.sisdaConfig.layout.width === 'boxed' )
                {
                    this.document.body.classList.add('boxed');
                }
                else
                {
                    this.document.body.classList.remove('boxed');
                }

                // Color theme - Use normal for loop for IE11 compatibility
                for ( let i = 0; i < this.document.body.classList.length; i++ )
                {
                    const className = this.document.body.classList[i];

                    if ( className.startsWith('theme-') )
                    {
                        this.document.body.classList.remove(className);
                    }
                }

                this.document.body.classList.add(this.sisdaConfig.colorTheme);
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void
    {
        this._sisdaSidebarService.getSidebar(key).toggleOpen();
    }
}
