import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
// Theme
import { ThemeModule } from '../theme/theme.module';
// pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
