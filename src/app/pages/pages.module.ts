import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material.module';

@NgModule({
    imports:[PagesRoutingModule,MaterialModule],
    declarations:[PagesComponent, DashboardComponent]
})

export class PagesModule{}