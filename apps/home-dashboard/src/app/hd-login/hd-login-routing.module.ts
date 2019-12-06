import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HDLoginComponent } from './containers/hd-login/hd-login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HDLoginComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HDLoginRoutingModule {}
