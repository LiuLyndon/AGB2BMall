import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  // canLoad: [AuthGuard],
  loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
