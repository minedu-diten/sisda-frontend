import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { SIGSDA_CONFIG } from '@sigsda/services/config.service';

@NgModule()
export class SigsdaModule
{
    constructor(@Optional() @SkipSelf() parentModule: SigsdaModule)
    {
        if ( parentModule )
        {
            throw new Error('SigsdaModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : SigsdaModule,
            providers: [
                {
                    provide : SIGSDA_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
