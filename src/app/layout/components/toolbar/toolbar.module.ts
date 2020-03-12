import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SisdaShortcutsModule } from '@sisda/components';
import { SisdaSharedModule } from '@sisda/shared.module';
import { ToolbarComponent } from 'app/layout/components/toolbar/toolbar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
        ToolbarComponent,
        UserMenuComponent
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatListModule,
        SisdaSharedModule,
        SisdaShortcutsModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule {
}
