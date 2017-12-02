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
  @Input() paginator: boolean;
  @Input() itemsPerPage: number;
  @Input() pagesToShow: number;

  isDesc: boolean;
  selectedColumn: string;
  filterValue: string;
  startIndex: number;
  endIndex: number;

  constructor() { 
    this.selectedColumn = '';
    this.filterValue = '';
    this.startIndex = 0;
  }

  ngOnInit() {
    this.endIndex = this.data.length;        
  }

  sort(property: string) {
    if(this.selectedColumn === property) {
      this.isDesc = !this.isDesc;    
    } else {
      this.isDesc = false;
    }

    this.selectedColumn = property;
  }

  updateIndexes(indexes: {startIndex: number, endIndex: number}) {
    this.startIndex = indexes.startIndex;
    this.endIndex = indexes.endIndex +1;
  }
}
