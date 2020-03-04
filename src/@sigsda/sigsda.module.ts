import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { FUSE_CONFIG } from '@sigsda/services/config.service';

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
                    provide : FUSE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
