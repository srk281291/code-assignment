import { AbstractControl, ValidatorFn } from "@angular/forms";

export function balanceValidator(amount: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } => {
    const value = parseFloat(control.value?.toString());
    return amount - 500 < value ? { lowbalance: true } : null;
  };
}

//Yet to add this condition
export function amountValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } => {
    const value = parseFloat(control.value?.toString());
    return value <= 0 ? { minVal: true } : null;
  };
}
