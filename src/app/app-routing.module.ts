import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule),
  },
  {
    path: 'backend',
    loadChildren: () => import('./backend/backend.module').then(m => m.BackendModule),
  },
  {
    path: '',
    loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
