import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { Simplr, Adapter, AdapterForNgrxStore } from 'ngrx-store-simplr';

import { AppComponent } from './app.component';
import { TimestampContainerComponent } from './containers/timestamp';
import { TimestampService } from './services/timestamp';
import { NictService } from './services/nict';
import { reducer, initialState } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    TimestampContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer, initialState),
  ],
  providers: [
    Simplr,
    { provide: Adapter, useClass: AdapterForNgrxStore },
    TimestampService,
    NictService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }