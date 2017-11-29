import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input() data: string[][];
  @Input() columns: {title: string}[];

  constructor() { }

  ngOnInit() {
  }

}
