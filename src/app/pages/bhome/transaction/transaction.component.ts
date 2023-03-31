import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTransactionList } from '../store/transaction.actions';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  constructor(private store$: Store){}
  
  ngOnInit(): void {
    this.store$.dispatch(getTransactionList());
  }

}
