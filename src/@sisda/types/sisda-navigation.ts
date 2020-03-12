export interface SisdaNavigationItem {
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
    children?: SisdaNavigationItem[];
}

export interface SisdaNavigation extends SisdaNavigationItem {
    children?: SisdaNavigationItem[];
}
