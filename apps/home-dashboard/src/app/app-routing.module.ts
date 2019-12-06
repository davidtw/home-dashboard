import { NgModule } from '@angular/core';
import { LoadChildren, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { HDLoginModule } from './hd-login/hd-login.module';

let loginModule: LoadChildren = './login/login.module.ts';
if (!environment.production) {
    loginModule = () => HDLoginModule;
}

const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
},
  {
    path: 'login',
    loadChildren: loginModule
  },
  {
    path: '**',
    loadChildren: loginModule
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })]
})
export class AppRoutingModule {}
