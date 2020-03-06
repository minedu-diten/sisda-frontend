import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SigsdaSharedModule } from '@sigsda/shared.module';
import { FooterComponent } from 'app/layout/components/footer/footer.component';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        SigsdaSharedModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule {
}
