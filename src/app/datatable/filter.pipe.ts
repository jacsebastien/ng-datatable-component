import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(values: any[], filterString: string): any[] {
        let resultArray: any[] = [];

        if(values.length === 0 || filterString === '') {
            return values;
        }

        values.map(valuesItem =>  {
            const properties: string[] = Object.getOwnPropertyNames(valuesItem);
            let isFound = false;

            properties.map(propItem => {
                let compareString: string = valuesItem[propItem].toString() || valuesItem[propItem]

                if(compareString.toLowerCase().search(filterString.toLowerCase()) !== -1) {
                    isFound = true;
                }
            });

            if(isFound) {
                resultArray.push(valuesItem);
            }
        });

        return resultArray.length > 0 ? resultArray : [];
    }

}
