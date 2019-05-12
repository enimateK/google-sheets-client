import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {

  @Input()
  spreadSheet: any;
  @Input()
  formation: string;

  ngOnInit() {}

}
