import { sigsdaAnimations } from '@sigsda/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigsdaConfigService } from '@sigsda/services/config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sigsda-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: sigsdaAnimations
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  working = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _sigsdaConfigService: SigsdaConfigService,
    private _formBuilder: FormBuilder
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
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  save() {
    this.router.navigate(['/educarh/menu']);
  }
}
