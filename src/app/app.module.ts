import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { SisdaModule } from '@sisda/sisda.module';
import { SisdaSharedModule } from '@sisda/shared.module';
import { SisdaProgressBarModule, SisdaSidebarModule } from '@sisda/components';

import { sisdaConfig } from 'app/config/style-config';

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
        // Sisda modules
        SisdaModule.forRoot(sisdaConfig),
        SisdaProgressBarModule,
        SisdaSharedModule,
        SisdaSidebarModule,
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
