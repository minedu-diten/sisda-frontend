import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigsdaDirectivesModule } from '@sigsda/directives/directives';
import { SigsdaPipesModule } from '@sigsda/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        SigsdaDirectivesModule,
        SigsdaPipesModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        SigsdaDirectivesModule,
        SigsdaPipesModule
    ]
})
export class SigsdaSharedModule {
}
