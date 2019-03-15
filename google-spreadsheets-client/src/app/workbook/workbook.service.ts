import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { Workbook } from '../model/Workbook';
import 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WorkbookService {
    private baseUrl:string = 'http://localhost:9998/';
    
    constructor(private http:Http, private httpClient: HttpClient ) {

    }

    getWorkbook(spreadsheetId) {
        return this.http.get(this.baseUrl + 'get/' + '1nv43m6oX6VWHg2iENxYq7f-IFfWg8MDCqRuuNAQK4o8')
            .map(res => <Workbook>res.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            });
    }

    updateCell(spreadsheetId, sheet, cell, value) {
      return this.httpClient.post(
        this.baseUrl + 'update/' + '1nv43m6oX6VWHg2iENxYq7f-IFfWg8MDCqRuuNAQK4o8' +  "/" + sheet + "/" + cell + "/" + value,
        {},
        ).subscribe(result => {});
    }
}
