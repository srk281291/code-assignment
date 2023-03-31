import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { SubmitButtonComponent } from "bb-ui/components/submit-button/submit-button.component";
import { HeaderComponent } from "src/app/common/layout/header/header.component";
import { TranasctionFormComponent } from "./tranasction-form.component";

describe("TranasctionFormComponent", () => {
  let component: TranasctionFormComponent;
  let fixture: ComponentFixture<TranasctionFormComponent>;
  let storeMock: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    storeMock = jasmine.createSpyObj<Store>("Store", ["dispatch"]);

    await TestBed.configureTestingModule({
      declarations: [TranasctionFormComponent, SubmitButtonComponent, HeaderComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: Store, useValue: storeMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranasctionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should submit the form if it's valid", () => {
    const toAccountInput = fixture.nativeElement.querySelector(
      '[formControlName="toAccount"]'
    );
    toAccountInput.value = "Test Account";
    toAccountInput.dispatchEvent(new Event("input"));

    const amountInput = fixture.nativeElement.querySelector(
      '[formControlName="amount"]'
    );
    amountInput.value = 1000;
    amountInput.dispatchEvent(new Event("input"));

    fixture.detectChanges();

    const submitButton = fixture.nativeElement.querySelector(
      "button.js-trigger-form"
    );
    submitButton.click();

    expect(component.reviewTransaction).toBeTrue();
  });

  it("should not submit the form if it's invalid", () => {
    const submitButton = fixture.nativeElement.querySelector(
      "button.js-trigger-form"
    );
    submitButton.click();

    expect(component.reviewTransaction).toBeFalse();
  });

  it("should close the modal", () => {
    component.modalclose();

    expect(component.reviewTransaction).toBeFalse();
  });

  it("should proceed with the transaction", () => {
    spyOn(component, "resetFormValues");

    component.accountBalance = 2000;
    component.transactionForm.controls["toAccount"].setValue("Test Account");
    component.transactionForm.controls["amount"].setValue(1000);

    component.proceedTransaction();

    expect(component.accountBalance).toBe(1000);

    expect(component.resetFormValues).toHaveBeenCalled();
  });

  it("should reset form values", () => {
    component.transactionForm.controls['toAccount'].setValue("Test Account");
    component.transactionForm.controls['amount'].setValue(1000);

    component.resetFormValues();

    expect(component.transactionForm.controls["toAccount"].value).toBe("");
    expect(component.transactionForm.controls["amount"].value).toBe("");
    expect(component.transactionForm.controls["toAccount"].untouched).toBeTrue();
    expect(component.transactionForm.controls["amount"].untouched).toBeTrue();
  });
});
