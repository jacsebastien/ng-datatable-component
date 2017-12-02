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
  selectedColumn: string;
  filterValue: string = '';

  constructor() { }

  ngOnInit() {
    // console.log(this.sortable);
  }

  sort(property) {
    if(this.selectedColumn === property) {
      this.isDesc = !this.isDesc;    
    } else {
      this.isDesc = true;
    }

    this.selectedColumn = property;

    let direction = this.isDesc ? -1 : 1;

    this.data.sort((a, b) => {
      if(a[property] < b[property]){
          return -1 * direction;
      }
      else if( a[property] > b[property]){
          return 1 * direction;
      }
      else{
          return 0;
      }
    });
  }
}
