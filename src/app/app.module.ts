import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { sellReducer } from './sell.reducer';

import {
  MatToolbarModule, MatListModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatButtonToggleModule, MatSlideToggleModule,
  MatDividerModule, MatCardModule, MatGridListModule, MatTableModule, MatSidenavModule, MatIconModule, MatMenuModule, MatSliderModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerPlantListComponent } from './power-plant-list/power-plant-list.component';
import { PowerPlantDetalisComponent } from './power-plant-detalis/power-plant-detalis.component';
import { ResourcesComponent } from './resources/resources.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { EventDetalisComponent } from './event-detalis/event-detalis.component';
import { StoreModule } from '@ngrx/store';
import { AccumulatorDetalisComponent } from './accumulator-detalis/accumulator-detalis.component';
import { OfficeDetalisComponent } from './office-detalis/office-detalis.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerPlantListComponent,
    PowerPlantDetalisComponent,
    ResourcesComponent,
    ShortNumberPipe,
    EventDetalisComponent,
    AccumulatorDetalisComponent,
    OfficeDetalisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    LayoutModule,
    MatSidenavModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSliderModule,
    FormsModule,
    StoreModule.forRoot({ sell: sellReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
