import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector   : 'sigsda-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class SigsdaConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<SigsdaConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<SigsdaConfirmDialogComponent>
    )
    {
    }

}
