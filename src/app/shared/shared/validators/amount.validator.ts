import { AbstractControl, ValidatorFn } from '@angular/forms';

export function balanceValidator(amount: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } => {
    const value = parseFloat(control.value?.toString());
    console.log(amount - 500 < value  );
    console.log(value);
    return amount - 500 < value ? { lowbalance: true } : null;
  };
}
