import { sisdaAnimations } from '@sisda/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SisdaConfigService } from '@sisda/services/config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sisda-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: sisdaAnimations
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  working = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _sisdaConfigService: SisdaConfigService,
    private _formBuilder: FormBuilder
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
