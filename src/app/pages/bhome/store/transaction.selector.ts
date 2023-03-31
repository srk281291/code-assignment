import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TransactionState, featureKey } from "./transaction.reducer";

export const transactionState =
  createFeatureSelector<TransactionState>(featureKey);
export const transactionSelector = createSelector(
  transactionState,
  (state: TransactionState) => state.transactionHistory
);
