import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@home-dashboard/material';

import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class LoginModule {}
