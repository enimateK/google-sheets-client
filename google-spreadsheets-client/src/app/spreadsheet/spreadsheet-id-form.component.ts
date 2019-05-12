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
  displayedFormation = [];
  showFormations = false;
  showCodes = false;
  showFormationDetail = false;
  selectedFormation: string;
  showCodeDetail = false;
  selectedCode: string;
  modelId: string;

  constructor( private workbookService: WorkbookService
  ) { }

  ngOnInit() {}

  getSpreadsheet() {
    this.spreadsheetFound = false;
    this.workbookService.getWorkbook(this.spreadsheetId).subscribe((data) => {
      this.spreadSheet = data.sheets;
      this.spreadsheetFound = true;
    });
  }

  isFormationDisplayed(lineIndex) {
    return this.displayedFormation.includes(lineIndex);
  }

  displayFormationDetails(lineIndex) {
    if (this.displayedFormation.includes(lineIndex)) {
      let formationIndex = this.displayedFormation.indexOf(lineIndex);
      this.displayedFormation.splice(formationIndex);
    } else {
      this.displayedFormation.push(lineIndex);
    }
  }

  cellChanged($event){
    let newValue = $event.target.value;
    let sheetName = $event.target.parentElement.parentElement.children[0].defaultValue;
    let lineName = $event.target.parentElement.parentElement.children[1].defaultValue;
    let cellName = $event.target.parentElement.parentElement.children[2].defaultValue;
    this.spreadSheet[sheetName]["rows"][lineName][cellName] = newValue;
    this.workbookService.updateCell(this.spreadsheetId, sheetName, lineName, cellName, newValue);
  }

  getPDF() {
    this.workbookService.getPDF(this.spreadsheetId, this.modelId);
  }

  getFormationPDF(formationCode) {
    this.workbookService.getFormationPDF(this.spreadsheetId, this.modelId, formationCode);
  }
}
