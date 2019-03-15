import { Component, OnInit } from '@angular/core';
import {WorkbookService} from "../workbook/workbook.service";

@Component({
  selector: 'app-spreadsheet-id-form',
  templateUrl: './spreadsheet-id-form.component.html',
  styleUrls: ['./spreadsheet-id-form.component.css']
})
export class SpreadsheetIdFormComponent implements OnInit {
  spreadsheetId: string;
  spreadsheetFound = false;
  spreadSheet: any;

  constructor( private workbookService: WorkbookService
  ) { }

  ngOnInit() {
  }

  getSpreadsheet() {
    this.spreadsheetFound = false;
    this.workbookService.getWorkbook(this.spreadsheetId).subscribe((data) => {
      this.spreadSheet = data;
      this.spreadsheetFound = true;
    });
  }

  registerSpreadsheet() {

  }

  cellChanged($event){
    let newValue = $event.target.value;
    let sheetName = $event.target.parentElement.children[0].defaultValue;
    let lineName = $event.target.parentElement.children[1].defaultValue;
    let cellName = $event.target.parentElement.children[2].defaultValue;
    let cell = String.fromCharCode(66 + parseInt($event.target.parentElement.children[4].defaultValue)) + (parseInt($event.target.parentElement.children[3].defaultValue) + 2);
    this.spreadSheet[sheetName][lineName][cellName] = newValue;
    this.workbookService.updateCell(this.spreadsheetId, sheetName, cell, newValue);
  }
}
