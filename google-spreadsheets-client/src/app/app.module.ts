import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {SpreadsheetIdFormComponent} from "./spreadsheet/spreadsheet-id-form.component";
import {SpreadsheetService} from "./spreadsheet/spreadsheet-service.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {WorkbookService} from "./workbook/workbook.service";
import {HttpModule} from "@angular/http";
import {FormationDetailComponent} from "./spreadsheet/formation-detail.component";
import {CodeDetailComponent} from "./spreadsheet/code-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SpreadsheetIdFormComponent,
    FormationDetailComponent,
    CodeDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    SpreadsheetService,
    WorkbookService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
