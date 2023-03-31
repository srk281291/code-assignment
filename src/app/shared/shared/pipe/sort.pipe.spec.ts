
import { TransactionDetails } from "./../../../pages/bhome/model/transaction.model";
import { SortByPipe } from "./sort.pipe";

describe("SortByPipe", () => {
  let pipe: SortByPipe;
  const mockData: TransactionDetails[] = [
    { id: "1", dates: { valueDate: "2022-01-01" } },
    { id: "2", dates: { valueDate: "2022-02-01" } },
    { id: "3", dates: { valueDate: "2022-03-01" } },
  ];

  beforeEach(() => {
    pipe = new SortByPipe();
  });

  it("should create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should sort an array of TransactionDetails by valueDate in descending order", () => {
    const sortedData = pipe.transform(mockData);
    expect(sortedData[0].id).toBe("3");
    expect(sortedData[1].id).toBe("2");
    expect(sortedData[2].id).toBe("1");
  });

  it("should return empty array if input is empty", () => {
    const sortedData = pipe.transform([]);
    expect(sortedData).toEqual([]);
  });
});
