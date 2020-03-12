import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SisdaSharedModule } from '@sisda/shared.module';
import { SisdaSidebarModule } from '@sisda/components';
import { ContentModule } from './components/content/content.module';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';

@NgModule({
    imports: [
        RouterModule,
        SisdaSharedModule,
        SisdaSidebarModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        ToolbarModule
    ],
    declarations: [LayoutComponent],
    exports: [LayoutComponent]
})
export class LayoutModule {
}
