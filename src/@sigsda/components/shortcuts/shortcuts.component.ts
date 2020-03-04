import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sigsda-shortcuts',
    templateUrl: './shortcuts.component.html',
    styleUrls: ['./shortcuts.component.scss']
})
export class SigsdaShortcutsComponent implements OnInit {

    mobileShortcutsPanelActive: boolean;
    constructor() {
        this.mobileShortcutsPanelActive = false;
    }
    ngOnInit(): void {

    }


}
