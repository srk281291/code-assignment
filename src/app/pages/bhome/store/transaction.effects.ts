import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";

import { TransactionService } from "../service/transaction.service";
import { TransactionActions } from "./transaction.actions";

@Injectable()
export class TransactionEffects {
  getTransactionList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionActions.getTransactionList),
      switchMap(() =>
        this.transactionService.getTransaction().pipe(
          map(
            (data) => TransactionActions.getTransactionListSuccess({ data }),
            catchError((err) =>
              of(TransactionActions.getTransactionListFail(err))
            )
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
