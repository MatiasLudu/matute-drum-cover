import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DrumCoversComponent } from './components/drum-covers/drum-covers.component';
import { DecadesDrumSeriesComponent } from './components/decades-drum-series/decades-drum-series.component';
import { ContactComponent } from './components/contact/contact.component';
import { MessagesComponent } from './components/messages/messages.component';


const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'decades-drum-series', component: DecadesDrumSeriesComponent},
	{path: 'drum-covers', component: DrumCoversComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'messages', component: MessagesComponent}
	
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);