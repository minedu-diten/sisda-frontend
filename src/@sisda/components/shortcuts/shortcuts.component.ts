import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sisda-shortcuts',
    templateUrl: './shortcuts.component.html',
    styleUrls: ['./shortcuts.component.scss']
})
export class SisdaShortcutsComponent implements OnInit {

    mobileShortcutsPanelActive: boolean;
    constructor() {
        this.mobileShortcutsPanelActive = false;
    }
    ngOnInit(): void {

    }


}
