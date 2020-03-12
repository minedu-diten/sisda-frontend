import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SisdaDirectivesModule } from '@sisda/directives/directives';
import { SisdaPipesModule } from '@sisda/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        SisdaDirectivesModule,
        SisdaPipesModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        SisdaDirectivesModule,
        SisdaPipesModule
    ]
})
export class SisdaSharedModule {
}
