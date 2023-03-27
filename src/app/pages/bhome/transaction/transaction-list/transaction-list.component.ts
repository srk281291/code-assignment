import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { transactionSelector } from '../../store/transaction.selector';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent  {
  transactionData$ = this.store$.select(transactionSelector);
  filterTextVal: string;
  constructor(private store$: Store) {}
 
  filterText(event: any) {
    this.filterTextVal = event;
  }
}
