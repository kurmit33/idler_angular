import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule, MatListModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatButtonToggleModule,
  MatDividerModule, MatCardModule, MatGridListModule, MatTableModule, MatSidenavModule, MatIconModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerPlantListComponent } from './power-plant-list/power-plant-list.component';
import { PowerPlantDetalisComponent } from './power-plant-detalis/power-plant-detalis.component';
import { ResourcesComponent } from './resources/resources.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { EventDetalisComponent } from './event-detalis/event-detalis.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerPlantListComponent,
    PowerPlantDetalisComponent,
    ResourcesComponent,
    ShortNumberPipe,
    EventDetalisComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
