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

  // Private
  private _sigsdaPerfectScrollbar: SigsdaPerfectScrollbarDirective;
  private _unsubscribeAll: Subject<any>;

  constructor(
      private _sigsdaConfigService: SigsdaConfigService,
      private _sigsdaNavigationService: SigsdaNavigationService,
      private _sigsdaSidebarService: SigsdaSidebarService,
      private _router: Router
  ) {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }


  // Directive
  @ViewChild(SigsdaPerfectScrollbarDirective, { static: true })
  set directive(theDirective: SigsdaPerfectScrollbarDirective) {
      if (!theDirective) {
          return;
      }

      this._sigsdaPerfectScrollbar = theDirective;

      // Update the scrollbar on collapsable item toggle
      this._sigsdaNavigationService.onItemCollapseToggled
          .pipe(
              delay(500),
              takeUntil(this._unsubscribeAll)
          )
          .subscribe(() => {
              this._sigsdaPerfectScrollbar.update();
          });

      // Scroll to the active item position
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


  /**
   * On init
   */
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

      // Subscribe to the config changes
      this._sigsdaConfigService.config
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((config) => {
              this.sigsdaConfig = config;
          });

      // Get current navigation
      this._sigsdaNavigationService.onNavigationChanged
          .pipe(
              filter(value => value !== null),
              takeUntil(this._unsubscribeAll)
          )
          .subscribe(() => {
              this.navigation = this._sigsdaNavigationService.getCurrentNavigation();
          });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  /**
   * Toggle sidebar opened status
   */
  toggleSidebarOpened(): void {
      this._sigsdaSidebarService.getSidebar('navbar').toggleOpen();
  }

  /**
   * Toggle sidebar folded status
   */
  toggleSidebarFolded(): void {
      this._sigsdaSidebarService.getSidebar('navbar').toggleFold();
  }
}
