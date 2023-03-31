import { Pipe, PipeTransform } from '@angular/core';
import { TransactionDetails } from './../../../pages/bhome/model/transaction.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data, keyword: string): TransactionDetails[] {
    if (!keyword || keyword === '') {
     return data;
     
    }
    return data.filter((detail: TransactionDetails) => {
      return detail?.merchant?.name
        ?.toLowerCase()
        ?.includes(keyword.toLowerCase());
    });
    
  }
 
}
