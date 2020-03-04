import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SigsdaPipesModule } from '@sigsda/pipes/pipes.module';

import { SigsdaMaterialColorPickerComponent } from '@sigsda/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        SigsdaMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        SigsdaPipesModule
    ],
    exports: [
        SigsdaMaterialColorPickerComponent
    ],
})
export class SigsdaMaterialColorPickerModule
{
}
