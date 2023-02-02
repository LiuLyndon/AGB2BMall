import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { NotfoundComponent } from './notfound.component';

const routes: Routes = [
  {
    component: NotfoundComponent,
    path: '404',
  },
  {
    path: '**',
    redirectTo: '404' ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotfoundRoutingModule { }
