/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { QuotesComponent } from "./Quotes.component";

describe("QuotesComponent", () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuotesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges()
  });

  it("should create Quote component", () => {
  });

  it("should use the quoteList from the service", () => {

  });

  it("should create a new post", () => {

  });

  it("should disable the button when textArea is empty", () => {

  });

  it("should enable button when textArea is not empty", () => {

  });

  it("should remove post upon card click", () => {

  });

  it("should fetch data asynchronously", async () => {

  });
});
