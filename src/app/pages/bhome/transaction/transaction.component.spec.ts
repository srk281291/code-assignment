import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store, StoreModule } from "@ngrx/store";
import { TransactionComponent } from "./transaction.component";
import { HeaderComponent } from "./../../../common/layout/header/header.component";
import { CardComponent } from "./../../../common/layout/card/card.component";
import { IconHeaderComponent } from "./../../../shared/shared/utils/icon-header/icon-header.component";
import { TranasctionFormComponent } from "./tranasction-form/tranasction-form.component";
import { TransactionListComponent } from "./transaction-list/transaction-list.component";
import { provideMockStore } from "@ngrx/store/testing";

import { SharedModule } from "src/app/shared/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

describe("TransactionComponent", () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;
  let store: Store;
  beforeEach(async () => {
   
  
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, SharedModule ,  StoreModule.forRoot({}),],
      declarations: [
        TransactionComponent,
        HeaderComponent,
        CardComponent,
        IconHeaderComponent,
        TranasctionFormComponent,
        TransactionListComponent,
      ],
      providers: [Store, provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

 
});
