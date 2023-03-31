import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { TransactionDetails } from "../model/transaction.model";
@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  getTransaction(): Observable<TransactionDetails[]> {
    return this.http.get("./assets/transaction.json").pipe(
      map((data: TransactionDetails[]) => {
        return data;
      })
    );
  }
}
