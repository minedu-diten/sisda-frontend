import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sisda-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.scss']
})
export class ButtonLoginComponent implements OnInit {

  @Input()
  sisdaForm: FormGroup;

  @Input()
  working = false;

  constructor() { }

  ngOnInit() {
  }

  onClickChild(event) {
    if (!this.sisdaForm.valid) {
      event.preventDefault();
    }
  }
}
