import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
    @Input() totalItems: number;
    @Input() itemsPerPage: number;
    @Input() pagesToShow: number;

    @Output() indexesChanged = new EventEmitter<{startIndex: number, endIndex: number}>();

    currentPage = 1;
    totalPages = 0;
    pages: number[] = [];
    startPage: number;
    endPage: number;

    constructor() { }

    ngOnInit() {
        this.setPager();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.currentPage = 1;
        this.setPager();
    }

    setPage(pageNumber: number) {
        if (pageNumber < 1 || pageNumber > this.totalPages) {
            return;
        }
        this.currentPage = pageNumber;

        this.setPager();
    }

    setPager() {
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.pages = [];

        if (this.totalPages <= this.pagesToShow) {
            this.startPage = 1;
            this.endPage = this.totalPages;
        } else {
            if (this.currentPage <= Math.round(this.pagesToShow/2)) {
                this.startPage = 1;
                this.endPage = this.pagesToShow;
            } else if (this.currentPage + Math.floor(this.pagesToShow/2) >= this.totalPages) {
                this.startPage = this.totalPages - (this.pagesToShow-1);
                this.endPage = this.totalPages;
            } else {
                this.startPage = this.currentPage - Math.floor(this.pagesToShow/2);
                this.endPage = this.currentPage + Math.floor(this.pagesToShow/2);
            }
        }
 
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = Math.min(startIndex + this.itemsPerPage - 1, this.totalItems - 1);

        this.indexesChanged.emit({
            startIndex: startIndex,
            endIndex: endIndex
        });
 
        for(let i = this.startPage; i <= this.endPage; i++) {
            this.pages.push(i);
        }
    }
}
