import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SisdaSharedModule } from '@sisda/shared.module';
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
        SisdaSharedModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule {
}
