import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {SpreadsheetIdFormComponent} from "./spreadsheet/spreadsheet-id-form.component";
import {SpreadsheetService} from "./spreadsheet/spreadsheet-service.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SpreadsheetIdFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [SpreadsheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
