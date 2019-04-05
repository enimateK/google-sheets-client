import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { Workbook } from '../model/Workbook';
import 'rxjs/Rx';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class WorkbookService {
    private baseUrl:string = 'http://localhost:9998/';

    constructor(private http:Http, private httpClient: HttpClient ) {

    }

    getWorkbook(spreadsheetId) {
      //1nv43m6oX6VWHg2iENxYq7f-IFfWg8MDCqRuuNAQK4o8
        return this.http.get(this.baseUrl + 'get/' + spreadsheetId)
            .map(res => <Workbook>res.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            });
    }

    updateCell(spreadsheetId, sheetName, lineName, cellName, newValue) {
        return this.httpClient.get(
        this.baseUrl + 'update/'
          + spreadsheetId + '/'
          + sheetName + '/'
          + lineName + '/'
          + cellName + '/'
          + newValue
        ).subscribe(result => {});
    }
}
