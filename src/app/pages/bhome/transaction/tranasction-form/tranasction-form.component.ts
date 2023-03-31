import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { balanceValidator } from "src/app/shared/shared/validators/amount.validator";
import { TransactionActions } from "./../../store/transaction.actions";
import { TEXT } from "src/app/shared/shared/utils/constants/message";
@Component({
  selector: "app-tranasction-form",
  templateUrl: "./tranasction-form.component.html",
  styleUrls: ["./tranasction-form.component.scss"],
})
export class TranasctionFormComponent implements OnInit {
  transactionForm!: FormGroup;
  formErrors = {};
  accountBalance = 5824.76;
  reviewTransaction = false;
  readonly TEXT = TEXT;
  constructor(private store$: Store) {}
  ngOnInit() {
    this.transactionForm = new FormGroup({
      toAccount: new FormControl("", [Validators.required]),
      amount: new FormControl("", [
        Validators.required,
        balanceValidator(this.accountBalance),
      ]),
    });
  }

  submitForm():void {
    this.transactionForm.markAllAsTouched();
    if (this.transactionForm?.valid) {
      this.reviewTransaction = true;
    }
  }


  modalclose(): void {
    this.reviewTransaction = false;
  }

  proceedTransaction(): void {
    this.reviewTransaction = false;
    this.accountBalance =
      this.accountBalance -
      Number(this.transactionForm.controls["amount"].value);

    this.store$.dispatch(
      TransactionActions.updateTransaction(this.updateTransactionPayload())
    );
    this.resetFormValues();
  }

  updateTransactionPayload() {
    return {
      data: {
        id: Math.random().toString(),
        merchant: {
          name: this.transactionForm.controls["toAccount"].value,
          accountNumber: "SI64397745065188826",
        },
        dates: { valueDate: new Date().getTime().toString() },
        categoryCode: this.randomColor(),
        transaction: {
          type: "Transaction",
          creditDebitIndicator: "DBIT",
          amountCurrency: {
            currencyCode: "EUR",
            amount: `${this.transactionForm.controls["amount"].value}`,
          },
        },
      },
    };
  }

  randomColor(): string {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  }

  resetFormValues(): void {
    this.transactionForm.controls["toAccount"].setValue("");
    this.transactionForm.controls["amount"].setValue("");
    this.transactionForm.controls["toAccount"].markAsUntouched();
    this.transactionForm.controls["amount"].markAsUntouched();
  }
}
