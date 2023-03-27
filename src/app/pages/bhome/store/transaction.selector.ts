import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TransactionState } from "./transaction.reducer";


export const featureSelector =
  createFeatureSelector<TransactionState>('transaction');
export const transactionSelector = createSelector(
  featureSelector,
  (state) => state.transactionHistory
);
