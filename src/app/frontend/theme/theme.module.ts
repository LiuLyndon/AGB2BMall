import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// route
import { PagesRoutingModule } from '../pages/pages-routing.module';
// theme
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  exports: [
    LayoutComponent,
  ],
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class ThemeModule { }
