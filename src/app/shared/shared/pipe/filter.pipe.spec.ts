import { FilterPipe } from "./filter.pipe";
import { TransactionDetails } from "./../../../pages/bhome/model/transaction.model";

describe("FilterPipe", () => {
  let pipe: FilterPipe;
  const mockData: TransactionDetails[] = [
    { id: "1", merchant: { name: "Merchant 1", accountNumber: "1" } },
    { id: "2", merchant: { name: "Merchant 2", accountNumber: "2" } },
    { id: "3", merchant: { name: "Merchant 3", accountNumber: "3" } },
  ];

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it("should create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should filter an array of TransactionDetails by merchant name", () => {
    const filteredData = pipe.transform(mockData, "merchant 2");
    expect(filteredData.length).toBe(1);
    expect(filteredData[0].id).toBe("2");
  });

  it("should return original array if keyword is empty", () => {
    const filteredData = pipe.transform(mockData, "");
    expect(filteredData).toEqual(mockData);
  });

  it("should return original array if keyword is null", () => {
    const filteredData = pipe.transform(mockData, null);
    expect(filteredData).toEqual(mockData);
  });

  it("should return empty array if keyword does not match any merchant names", () => {
    const filteredData = pipe.transform(mockData, "Non-existing Merchant");
    expect(filteredData.length).toBe(0);
  });
});
