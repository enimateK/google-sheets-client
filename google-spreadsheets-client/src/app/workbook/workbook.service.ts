import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { Workbook } from '../model/Workbook';
import 'rxjs/Rx';

@Injectable()
export class WorkbookService {
    private baseUrl:string = 'http://localhost:9998/get/example';
    
    constructor(private http:Http) {

    }

    getWorkbook() {
        return this.http.get(this.baseUrl)
            .map(res => <Workbook>res.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            });
    }
}