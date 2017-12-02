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


  isDesc = true;
  selectedColumn: string = '';
  filterValue: string = '';

  constructor() { }

  ngOnInit() {
    // console.log(this.sortable);
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
