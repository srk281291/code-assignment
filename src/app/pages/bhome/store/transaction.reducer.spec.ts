import { TransactionDetails } from "./../model/transaction.model";
import { TransactionActions } from "./transaction.actions";
import { transactionReducer } from "./transaction.reducer";

describe("transactionReducer", () => {
  const initialState = {
    transactionHistory: [],
    error: "",
  };

  const dummyTransaction: TransactionDetails = {
    id: "1",
    merchant: { name: "Merchant 1", accountNumber: "123" },
    dates: { valueDate: "2023-03-31T00:00:00.000Z" },
    categoryCode: "#FFF",
    transaction: {
      type: "Transaction",
      creditDebitIndicator: "DBIT",
      amountCurrency: { currencyCode: "EUR", amount: "100" },
    },
  };

  it("should add a transaction to the transactionHistory", () => {
    const action = TransactionActions.updateTransaction({
      data: dummyTransaction,
    });
    const newState = transactionReducer(initialState, action);
    expect(newState.transactionHistory.length).toBe(1);
    expect(newState.transactionHistory[0]).toEqual(dummyTransaction);
  });

  it("should add a list of transactions to the transactionHistory", () => {
    const dummyTransactions: TransactionDetails[] = [
      dummyTransaction,
      {
        id: "2",
        merchant: { name: "Merchant 2", accountNumber: "456" },
        dates: { valueDate: "2023-03-30T00:00:00.000Z" },
        categoryCode: "#000",
        transaction: {
          type: "Transaction",
          creditDebitIndicator: "CRDT",
          amountCurrency: { currencyCode: "USD", amount: "200" },
        },
      },
    ];
    const action = TransactionActions.getTransactionListSuccess({
      data: dummyTransactions,
    });
    const newState = transactionReducer(initialState, action);
    expect(newState.transactionHistory.length).toBe(2);
  });
});
