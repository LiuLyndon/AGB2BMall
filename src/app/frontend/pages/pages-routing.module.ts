import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// 
import { HomeComponent } from './home/home.component';

const routes: Routes = [ {
  path: '', // 預設(公告)
  component: HomeComponent
}, {
  path: 'home', // 
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
