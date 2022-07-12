import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DrumCoversComponent } from './components/drum-covers/drum-covers.component';
import { DecadesDrumSeriesComponent } from './components/decades-drum-series/decades-drum-series.component';
import { ContactComponent } from './components/contact/contact.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DrumCoversComponent,
    DecadesDrumSeriesComponent,
    ContactComponent,
    MessagesComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
