import { SigsdaNavigation } from '@sigsda/types';

export const navigation: SigsdaNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',       
        type     : 'item',
        icon     : 'email',
        url      : '/sample',
        badge    : {
            title    : '25',                  
            bg       : '#F44336',
            fg       : '#FFFFFF'
        }
        // children : [
        //     {
        //         id       : 'sample',
        //         title    : 'Sample',                
        //         type     : 'item',
                
                
                
        //     }
        // ]
    }
];
