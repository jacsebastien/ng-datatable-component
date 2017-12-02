import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(values: any[], property: string, isDesc: boolean): any {
        const direction = isDesc ? -1 : 1;
        let resultArray: any[] = [];
        
        if (values.length === 0 || property === '') {
            return values;
        }

        resultArray = values.slice().sort((a, b) => {
            if(a[property] < b[property]){
                return -1 * direction;
            }
            else if( a[property] > b[property]){
                return 1 * direction;
            }
            else{
                return 0;
            }
        });

        return resultArray;
    }

}
