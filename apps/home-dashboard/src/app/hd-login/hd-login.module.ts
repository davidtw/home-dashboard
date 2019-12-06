import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from '@home-dashboard/login';

import { HDLoginComponent } from './containers/hd-login/hd-login.component';
import { HDLoginRoutingModule } from './hd-login-routing.module';



@NgModule({
  declarations: [HDLoginComponent],
  imports: [
    CommonModule,
    HDLoginRoutingModule,
    LoginModule
  ]
})
export class HDLoginModule { }
