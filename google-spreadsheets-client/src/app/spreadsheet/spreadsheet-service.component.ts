import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SpreadsheetService {

  constructor(private http: HttpClient) { }

  getSpreadsheet(): Observable<any> {
    return this.http.get('');
  }
}
