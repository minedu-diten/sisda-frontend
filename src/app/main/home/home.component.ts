import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SigsdaConfigService } from '@sigsda/services/config.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { sigsdaAnimations } from '@sigsda/animations';

@Component({
  selector: 'sigsda-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: sigsdaAnimations
})
export class HomeComponent implements OnInit, OnDestroy {
  sigsdaConfig: any;
  menuColor: boolean = true;
  toolbarMenu: boolean = true;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _sigsdaConfigService: SigsdaConfigService,
  ) {
    this._sigsdaConfigService.config = {
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

  goToMenu(navigate: boolean) {
    if (!navigate) {
      return;
    }
    this.router.navigate(['/educarh/sisda/escalafon']);
  }
}