import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {SpreadsheetIdFormComponent} from "./spreadsheet/spreadsheet-id-form.component";
import {SpreadsheetService} from "./spreadsheet/spreadsheet-service.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SpreadsheetTableComponent} from "./spreadsheet/spreadsheet-table.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SpreadsheetIdFormComponent,
    SpreadsheetTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SpreadsheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
