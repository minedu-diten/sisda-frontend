import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { SigsdaModule } from '@sigsda/sigsda.module';
import { SigsdaSharedModule } from '@sigsda/shared.module';
import { SigsdaProgressBarModule, SigsdaSidebarModule } from '@sigsda/components';

import { sigsdaConfig } from 'app/config/style-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,    
        // Sigsda modules
        SigsdaModule.forRoot(sigsdaConfig),
        SigsdaProgressBarModule,
        SigsdaSharedModule,
        SigsdaSidebarModule,
        // App modules
        LayoutModule,
        SampleModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
