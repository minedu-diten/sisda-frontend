import { Component } from '@angular/core';

import { SigsdaTranslationLoaderService } from '@sigsda/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    /**
     * Constructor
     *
     * @param {SigsdaTranslationLoaderService} _sigsdaTranslationLoaderService
     */
    constructor(
        private _sigsdaTranslationLoaderService: SigsdaTranslationLoaderService
    )
    {
        this._sigsdaTranslationLoaderService.loadTranslations(english, turkish);
    }
}
