import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SisdaSharedModule } from '@sisda/shared.module';
import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        RouterModule,
        SisdaSharedModule
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {
}
