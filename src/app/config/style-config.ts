import { SigsdaConfig } from '@sigsda/types';

export const sigsdaConfig: SigsdaConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme: 'theme-default',
    customScrollbars: true,
    layout: {
        style: 'sigsda-layout',
        width: 'fullwidth',
        navbar: {
            primaryBackground: 'sigsda-navy-700',
            //secondaryBackground: 'sigsda-navy-900',
            secondaryBackground: 'sigsda-navy-700',
            folded: false,
            hidden: false,
            position: 'left',
            variant: 'vertical-style-1'
        },
        toolbar: {
            customBackgroundColor: false,
            background: 'sigsda-white-500',
            hidden: false,
            position: 'below-static'
        },
        footer: {
            customBackgroundColor: true,
            background: 'sigsda-navy-900',
            hidden: false,
            position: 'below-fixed'
        },
        sidepanel: {
            hidden: false,
            position: 'right'
        }
    }
};
