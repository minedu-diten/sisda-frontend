import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { SigsdaConfirmDialogComponent } from '@sigsda/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        SigsdaConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        SigsdaConfirmDialogComponent
    ],
})
export class SigsdaConfirmDialogModule
{
}
