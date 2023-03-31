import { TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { transactionSelector } from "../../store/transaction.selector";

import { TransactionListComponent } from "./transaction-list.component";
import { TransactionItemComponent } from "./../../../../common/bb-ui/components/transaction-item/transaction-item.component";
import { FilterComponent } from "bb-ui/components/filter/filter.component";
import { Store } from "@ngrx/store";
import { FilterPipe } from "src/app/shared/shared/pipe/filter.pipe";
import { SortByPipe } from "src/app/shared/shared/pipe/sort.pipe";

describe("TransactionListComponent", () => {
  let component: TransactionListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionListComponent,
        TransactionItemComponent,
        FilterComponent,
        FilterPipe,
        SortByPipe,
      ],
      providers: [
        Store,
        provideMockStore({
          selectors: [{ selector: transactionSelector, value: [] }],
        }),
      ],
    });
    const fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
