import { Pipe, PipeTransform } from "@angular/core";
import { TransactionDetails } from "./../../../pages/bhome/model/transaction.model";

@Pipe({
  name: "sortBy",
})
export class SortByPipe implements PipeTransform {
  transform(data: TransactionDetails[]): TransactionDetails[] {
    if (!data || !data.length) {
      return data;
    }
    // This can be dynamic like accepting type,key params. and switch case can be used for return
    return data
      .slice()
      ?.sort(
        (a, b) =>
          new Date(b?.dates.valueDate).getTime() -
          new Date(a?.dates.valueDate).getTime()
      );
  }
}
