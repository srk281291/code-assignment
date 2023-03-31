import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TransactionService } from "./transaction.service";
import { TransactionDetails } from "../model/transaction.model";

describe("TransactionService", () => {
  let service: TransactionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService],
    });
    service = TestBed.inject(TransactionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return transaction details", () => {
    const mockData: TransactionDetails[] = [
      {
        id: "1670a27b-be5d-4dc9-ade0-3d544e3b6152",
        merchant: {
          name: "Amazon Online Store",
          accountNumber: "SI64397745065188826",
        },
        dates: { valueDate: 1600370800000 },
        categoryCode: "#c12020",
        transaction: {
          type: "Online Transfer",
          creditDebitIndicator: "DBIT",
          amountCurrency: { currencyCode: "EUR", amount: "22.10" },
        },
      },
    ];

    service.getTransaction().subscribe((data: TransactionDetails[]) => {
      expect(data.length).toBe(1);
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne("./assets/transaction.json");
    expect(req.request.method).toBe("GET");
    req.flush(mockData);
  });
});
