import { Pipe, PipeTransform } from '@angular/core';
import { TransactionDetails } from './../../../pages/bhome/model/transaction.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(data: any): TransactionDetails[] {
    if (!data?.length) {
      return data;
    }
    return data.slice()?.sort(
      (a, b) =>
        new Date(b?.dates.valueDate).getTime() -
        new Date(a?.dates.valueDate).getTime()
    );
   
  }
}
