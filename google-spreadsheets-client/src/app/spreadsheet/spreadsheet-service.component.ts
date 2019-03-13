import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SpreadsheetService {

  constructor(private http: HttpClient) { }

  getSpreadsheet(spreadsheetId): Observable<any> {
    return this.http.get('http://localhost:9998/get/' + spreadsheetId);
  }
}
