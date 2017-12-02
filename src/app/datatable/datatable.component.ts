import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: any[];
  @Input() sortable: boolean;
  @Input() filterable: boolean;

  isDesc = true;
  selectedColumn: string = '';
  filterValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  sort(property: string) {
    if(this.selectedColumn === property) {
      this.isDesc = !this.isDesc;    
    } else {
      this.isDesc = false;
    }

    this.selectedColumn = property;
  }
}
