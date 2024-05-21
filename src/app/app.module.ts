import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes/routes.module';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/components/Quotes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
