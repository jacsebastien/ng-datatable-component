import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { FilterPipe } from './datatable/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
