export interface SigsdaNavigationItem
{
    id: string;
    title: string;
    type: 'item' | 'group' | 'collapsable';
    icon?: string;
    hidden?: boolean;
    url?: string;
    classes?: string;
    exactMatch?: boolean;
    externalUrl?: boolean;
    openInNewTab?: boolean;
    function?: any;
    badge?: {
        title?: string;
        translate?: string;
        bg?: string;
        fg?: string;
    };
    children?: SigsdaNavigationItem[];
}

export interface SigsdaNavigation extends SigsdaNavigationItem
{
    children?: SigsdaNavigationItem[];
}
