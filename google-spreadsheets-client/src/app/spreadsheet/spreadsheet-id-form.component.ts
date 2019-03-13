import { Component, OnInit } from '@angular/core';
import {SpreadsheetService} from "./spreadsheet-service.component";

@Component({
  selector: 'app-spreadsheet-id-form',
  templateUrl: './spreadsheet-id-form.component.html',
  styleUrls: ['./spreadsheet-id-form.component.css']
})
export class SpreadsheetIdFormComponent implements OnInit {
  spreadsheetId: any;

  constructor( private spreadsheetService: SpreadsheetService
  ) { }

  ngOnInit() {
  }

  getSpreadsheet() {
    this.spreadsheetService.getSpreadsheet(this.spreadsheetId).subscribe((data) => {
      console.log(data);
    });
  }
}
