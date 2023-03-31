// import { TestBed } from "@angular/core/testing";
// import { provideMockActions } from "@ngrx/effects/testing";
// import { Observable } from "rxjs";

// import { TransactionEffects } from "./transaction.effects";
// import { TransactionService } from "../service/transaction.service";
// import { TransactionActions } from "./transaction.actions";

// describe("TransactionEffects", () => {
//   let effects: TransactionEffects;
//   let actions$: Observable<any>;
//   let transactionService: jasmine.SpyObj<TransactionService>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         TransactionEffects,
//         provideMockActions(() => actions$),
//         {
//           provide: TransactionService,
//           useValue: jasmine.createSpyObj("TransactionService", [
//             "getTransaction",
//           ]),
//         },
//       ],
//     });

//     effects = TestBed.inject(TransactionEffects);
//     actions$ = TestBed.inject(Observable);
//     transactionService = TestBed.inject(
//       TransactionService
//     ) as jasmine.SpyObj<TransactionService>;
//   });

//   // xit("should dispatch success action on successful getTransactionList", (done) => {
//   //   const data = [
//   //     {
//   //       id: "1",
//   //     },
//   //     {
//   //       id: "1",
//   //     },
//   //   ];

//   //   const action = TransactionActions.getTransactionList();
//   //   const successAction = TransactionActions.getTransactionListSuccess({
//   //     data,
//   //   });

//   //   actions$ = hot("--a-", { a: action });
//   //   const response = cold("--a|", { a: data });
//   //   transactionService.getTransaction.and.returnValue(response);

//   //   effects.getTransactionList$.subscribe((result) => {
//   //     expect(result).toEqual(successAction);
//   //     done();
//   //   });
//   // });

// //   it("should dispatch fail action on error in getTransactionList", (done) => {
// //     const error = "Error in getTransactionList";
// //     const action = TransactionActions.getTransactionList();
// //     const failAction = TransactionActions.getTransactionListFail({ error });

// //     actions$ = hot("--a-", { a: action });
// //     const response = cold("--#|", {}, error);
// //     transactionService.getTransaction.and.returnValue(response);

// //     effects.getTransactionList$.subscribe((result) => {
// //       expect(result).toEqual(failAction);
// //       done();
// //     });
// //   });
// });
