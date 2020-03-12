import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SisdaConfigService } from '@sisda/services/config.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { sisdaAnimations } from '@sisda/animations';

@Component({
  selector: 'sisda-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: sisdaAnimations
})
export class HomeComponent implements OnInit, OnDestroy {
  sisdaConfig: any;
  menuColor: boolean = true;
  toolbarMenu: boolean = true;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _sisdaConfigService: SisdaConfigService,
  ) {
    this._sisdaConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
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

  goToMenu(navigate: boolean) {
    if (!navigate) {
      return;
    }
    this.router.navigate(['/educarh/sisda/escalafon']);
  }
}