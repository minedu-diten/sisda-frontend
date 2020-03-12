import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SISDA_CONFIG } from '@sisda/services/config.service';

@NgModule()
export class SisdaModule {
    constructor(@Optional() @SkipSelf() parentModule: SisdaModule) {
        if (parentModule) {
            throw new Error('SisdaModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders {
        return {
            ngModule: SisdaModule,
            providers: [
                {
                    provide: SISDA_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
