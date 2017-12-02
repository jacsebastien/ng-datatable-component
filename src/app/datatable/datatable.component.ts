import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.scss']
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
    }

    ngOnInit() {
        this.startIndex = 0;
        this.endIndex = this.itemsPerPage;
    }

    sort(property: string) {
        if (this.selectedColumn === property) {
            this.isDesc = !this.isDesc;
        } else {
            this.isDesc = false;
        }

        this.selectedColumn = property;
    }

    updateIndexes(currentPage: number) {
        this.startIndex = (currentPage - 1) * this.itemsPerPage;
        this.endIndex = Math.min(this.startIndex + this.itemsPerPage, this.data.length - 1);
    }
}
