import { createReducer, on } from "@ngrx/store";

import { TransactionActions } from "./transaction.actions";
import { TransactionDetails } from "./../model/transaction.model";

export interface TransactionState {
  transactionHistory: Array<TransactionDetails>;
  error: string;
}

const initialState: TransactionState = {
  transactionHistory: [],
  error: "",
};

const _transactionReducer = createReducer(
  initialState,
  on(TransactionActions.updateTransaction, (state, data) => {
    return {
      ...state,
      transactionHistory: [...state.transactionHistory, data.data],
    };
  }),

  on(TransactionActions.getTransactionListSuccess, (state, data) => {
    return {
      ...state,
      transactionHistory: [...state.transactionHistory, ...data.data],
    };
  })
);

export function transactionReducer(state, action) {
  return _transactionReducer(state, action);
}
export const featureKey = "transactionState";
