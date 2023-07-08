import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent, CountriesListComponent],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
