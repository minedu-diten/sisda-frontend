import { Pipe, PipeTransform } from '@angular/core';
import { SisdaUtils } from '@sisda/utils';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(mainArr: any[], searchText: string, property: string): any {
        return SisdaUtils.filterArrayByString(mainArr, searchText);
    }
}
