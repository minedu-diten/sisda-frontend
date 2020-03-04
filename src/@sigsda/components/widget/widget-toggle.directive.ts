import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[sigsdaWidgetToggle]'
})
export class SigsdaWidgetToggleDirective
{
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    )
    {
    }
}
