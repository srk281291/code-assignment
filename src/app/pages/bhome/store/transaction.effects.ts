import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { TransactionService } from '../service/transaction.service';
import { TransactionActions } from './transaction.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class TransactionEffects {
  getTransactionList$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(TransactionActions.getTransactionList),
      switchMap(() =>
        this.transactionService.getTransaction().subscribe(
          (data: any) => {
            TransactionActions.getTransactionListSuccess({ data });
          },
          catchError((err) =>
            of(TransactionActions.getTransactionListFail(err))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private transactionService: TransactionService
  ) {}
}
