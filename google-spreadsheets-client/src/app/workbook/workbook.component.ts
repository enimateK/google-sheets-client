import { Component, OnInit } from "@angular/core";
import { HttpModule } from "@angular/http"
import { Workbook } from './model/Workbook';
import { WorkbookService } from './Workbook.service';

@Component({
    selector: '',
    template: '',
    providers: [
        HttpModule,
        WorkbookService
    ]
})
export class WorkbookComponent implements OnInit {
    public workbook:Workbook;

    constructor(private workbookService:WorkbookService) {
        
    }

    ngOnInit() {
        this.workbookService.getWorkbook()
            .subscribe(workbook => 
                {
                    console.log(this.workbook);
                    this.workbook = workbook;
                }, error => alert(error));
    }
}