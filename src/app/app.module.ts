import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerPlantListComponent } from './power-plant-list/power-plant-list.component';
import { PowerPlantDetalisComponent } from './power-plant-detalis/power-plant-detalis.component';
import { ResourcesComponent } from './resources/resources.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PowerPlantListComponent,
    PowerPlantDetalisComponent,
    ResourcesComponent,
    ShortNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
