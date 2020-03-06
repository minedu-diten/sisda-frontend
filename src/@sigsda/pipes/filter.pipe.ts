import { Pipe, PipeTransform } from '@angular/core';
import { SigsdaUtils } from '@sigsda/utils';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(mainArr: any[], searchText: string, property: string): any {
        return SigsdaUtils.filterArrayByString(mainArr, searchText);
    }
}
