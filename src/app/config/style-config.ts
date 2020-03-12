import { SisdaConfig } from '@sisda/types';

export const sisdaConfig: SisdaConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme: 'theme-default',
    customScrollbars: true,
    layout: {
        style: 'sisda-layout',
        width: 'fullwidth',
        navbar: {
            primaryBackground: 'sisda-navy-700',
            //secondaryBackground: 'sisda-navy-900',
            secondaryBackground: 'sisda-navy-700',
            folded: false,
            hidden: false,
            position: 'left',
            variant: 'vertical-style-1'
        },
        toolbar: {
            customBackgroundColor: false,
            background: 'sisda-white-500',
            hidden: false,
            position: 'below-static'
        },
        footer: {
            customBackgroundColor: true,
            background: 'sisda-navy-900',
            hidden: false,
            position: 'below-fixed'
        },
        sidepanel: {
            hidden: false,
            position: 'right'
        }
    }
};
