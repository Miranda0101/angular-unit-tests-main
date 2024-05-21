/* tslint:disable:no-unused-variable */
import { TestBed } from "@angular/core/testing";
import { QuoteService } from "./Quote.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe("QuoteService", () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(QuoteService);
  });

  it("should be created", () => {

  });

  it("should create a post in an array", () => {

  });

  it("should remove a created post from the array of posts", () => {

  });
});
