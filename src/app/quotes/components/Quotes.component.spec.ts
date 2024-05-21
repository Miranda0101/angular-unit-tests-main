/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotesComponent } from './Quotes.component';
import { FormsModule } from '@angular/forms';
import { QuoteService } from '../service/Quote.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuoteModel } from '../model/QuoteModel';

describe('QuotesComponent', () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;
  let quoteService: QuoteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [QuotesComponent],
      providers: [QuoteService],
    }).compileComponents();

    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.debugElement.componentInstance;
    quoteService = TestBed.inject(QuoteService);
    fixture.detectChanges();
  });

  it('should create Quote component', () => {
    expect(component).toBeTruthy();
  });

  it('should use the quoteList from the service', () => {
    // const mockList: QuoteModel[] = [
    //   new QuoteModel('hello world', 'Mon 4, 2018'),
    //   new QuoteModel('hello new world', 'Mon 4, 2020'),
    // ];
    // spyOn(quoteService, 'getQuote').and.returnValue(mockList);
    fixture.detectChanges();
    console.log(component.quoteList)
    expect(component.quoteList).toEqual(quoteService.getQuote());
  });

  it('should create a new post', () => {
    component.quoteText = 'New post';
    fixture.detectChanges();
    const actualElement = fixture.debugElement.nativeElement;
    expect(actualElement.innerHTML).toContain('New post');
  });

  it('should disable the button when textArea is empty', () => {});

  it('should enable button when textArea is not empty', () => {});

  it('should remove post upon card click', () => {});

  it('should fetch data asynchronously', async () => {});
});
