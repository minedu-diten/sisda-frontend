import { SigsdaNavigation } from '@sigsda/types';

export const navigation: SigsdaNavigation[] = [
    {
        id: 'sample',
        title: 'Ejemplo',
        type: 'item',
        icon: 'dashboard',
        url: '/educarh/sample'
    },
    {
        id: 'escalafon',
        title: 'Gestión de Escalafón',
        type: 'item',
        icon: 'settings',
        url: '/educarh/sigsda/escalafon'
    },
    {
        id: 'bandeja',
        title: 'Bandeja de Pendientes',
        type: 'collapsable',
        icon: 'inbox',
        children: [
            {
                id: 'submenu1',
                title: 'Submenu1',
                type: 'item',
                url: '/educarh/sigsda/bandeja/submenu1',
            },
            {
                id: 'submenu2',
                title: 'Submenu2',
                type: 'item',
                url: '/educarh/sigsda/bandeja/submenu2',
            },
            {
                id: 'submenu3',
                title: 'Submenu3',
                type: 'item',
                url: '/educarh/sigsda/bandeja/submenu3',
            }
        ]
    },
    {
        id: 'iged',
        title: 'Búsqueda en otra IGED',
        type: 'item',
        icon: 'search',
        url: '/educarh/sigsda/iged'
    },
    {
        id: 'reporte',
        title: 'Reportería',
        type: 'item',
        icon: 'pie_chart',
        url: '/educarh/sigsda/reporte'
    }
];
