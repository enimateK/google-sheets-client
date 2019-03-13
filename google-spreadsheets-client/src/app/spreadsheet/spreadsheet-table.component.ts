import { Component, OnInit } from '@angular/core';
import {SpreadsheetService} from "./spreadsheet-service.component";

@Component({
  selector: 'app-spreadsheet-table',
  templateUrl: './spreadsheet-table.component.html',
  styleUrls: ['./spreadsheet-table.component.css']
})
export class SpreadsheetTableComponent implements OnInit {
  spreadsheet: any;
  constructor( private spreadsheetService: SpreadsheetService
  ) { }

  ngOnInit() {
  }
}
