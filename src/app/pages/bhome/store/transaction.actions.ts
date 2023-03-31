import { createAction, props } from '@ngrx/store';
import { TransactionDetails } from '../model/transaction.model';

const UPDATE_TRANSACTION = '[Transaction] Get transaction details';
const TRANSACTION_DATA = '[Transaction] Get transaction details';
const TRANSACTION_DATA_SUCCESS =
  '[Transaction] Get transaction details Success';
const TRANSACTION_DATA_FAIL = '[Transaction] Get transaction details Fail';

export const getTransactionList = createAction(TRANSACTION_DATA);
const getTransactionListSuccess = createAction(
  TRANSACTION_DATA_SUCCESS,
  props<{ data: Array<TransactionDetails> }>()
);
const updateTransaction = createAction(
  UPDATE_TRANSACTION,
  props<{ data: TransactionDetails }>()
);
const getTransactionListFail = createAction(
  TRANSACTION_DATA_FAIL,
  props<{ error: string }>()
);

export const TransactionActions = {
  getTransactionList,
  getTransactionListSuccess,
  getTransactionListFail,
  updateTransaction,
};
