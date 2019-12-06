import { Component } from '@angular/core';

@Component({
  selector: 'home-dashboard-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  
  public username: string;
  public password: string;
  public showSpinner = false;

  constructor() { }

  public login(): void {
    
  }

}
