import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-code-detail',
  templateUrl: './code-detail.component.html',
  styleUrls: ['./code-detail.component.css']
})
export class CodeDetailComponent implements OnInit {

  @Input()
  spreadSheet: any;
  @Input()
  code: string;

  ngOnInit() {}

}
