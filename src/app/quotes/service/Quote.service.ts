import { Injectable } from "@angular/core";
import { QuoteModel } from "../model/QuoteModel";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class QuoteService {
  public quoteList: QuoteModel[] = [];

  private daysOfTheWeeks = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  constructor(private http: HttpClient) {}

  addNewQuote(quote: String) {
    const date = new Date();
    const dayOfTheWeek = this.daysOfTheWeeks[date.getDate()];
    const day = date.getDay();
    const year = date.getFullYear();
    this.quoteList.push(
      new QuoteModel(quote, `${dayOfTheWeek} ${day}, ${year}`)
    );
  }

  getQuote() {
    return this.quoteList;
  }

  removeQuote(index: number) {
    this.quoteList.splice(index, 1);
  }

  // fetchQuotesFromServer(): Promise<QuoteModel[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve([new QuoteModel("I love unit testing", "Mon 4, 2018")]);
  //     }, 2000);
  //   });
  // }
  fetchQuotesFromServer(): Observable<QuoteModel[]> {
    return this.http.get<any>('https://dummyjson.com/quotes').pipe(map(data=>data.quotes))
  }
}
