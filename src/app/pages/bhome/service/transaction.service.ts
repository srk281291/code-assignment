import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  getTransaction(): any {
    return this.http.get('./assets/transaction.json').pipe(
      map((data) => {
        return data;
      })
    );
  }
}
