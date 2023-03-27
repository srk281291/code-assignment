import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";
import { balanceValidator } from "src/app/shared/shared/validators/amount.validator";
import { TransactionActions } from "./../../store/transaction.actions";

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
  constructor(private store$: Store) {}
  ngOnInit() {
    this.transactionForm = new FormGroup({
      fromAccount: new FormControl(
        {
          value: `My Personal Account: ${this.accountBalance.toFixed(2)}`,
          disabled: true,
        },

        [Validators.required]
      ),
      toAccount: new FormControl("", [Validators.required]),
      amount: new FormControl("", [
        Validators.required,
        balanceValidator(this.accountBalance),
      ]),
    });
  }

  submitForm(event) {
    this.transactionForm.markAllAsTouched();

    if (this.transactionForm?.valid) {
      this.reviewTransaction = true;
    }
  }

  // This can be moved to directive
  onlyNumber(e) {
    return (
      e.charCode === 0 ||
      (e.charCode >= 48 && e.charCode <= 57) ||
      (e.charCode == 46 && e.target.value.indexOf(".") < 0)
    );
  }

  modalclose() {
    this.reviewTransaction = false;
  }

  proceedTransaction() {
    this.reviewTransaction = false;
    this.accountBalance =
      this.accountBalance -
      Number(this.transactionForm.controls["amount"].value);
    this.transactionForm.controls["fromAccount"].setValue(
      `My Personal Account: ${this.accountBalance}`
    );
    this.store$.dispatch(
      TransactionActions.updateTransaction({
        data: {
          id: Math.random(),
          merchant: {
            name: this.transactionForm.controls["toAccount"].value,
            accountNumber: "SI64397745065188826",
          },
          dates: { valueDate: new Date().getTime() },
          categoryCode: "#1180aa",
          transaction: {
            type: "Transaction",
            creditDebitIndicator: "DBIT",
            amountCurrency: {
              currencyCode: "EUR",
              amount: `-${this.transactionForm.controls[
                "amount"
              ].value.toString()}`,
            },
          },
        },
      })
    );
    this.transactionForm.controls["toAccount"].setValue("");
    this.transactionForm.controls["amount"].setValue("");
    this.transactionForm.controls["toAccount"].markAsUntouched();
    this.transactionForm.controls["amount"].markAsUntouched();
  }
}
