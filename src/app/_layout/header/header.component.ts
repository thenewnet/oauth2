import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string = '';

  ngOnInit(): void {
  }
  constructor(
    public router: Router,
    // private authService: AuthService
    private authService: OAuthService
  ) {
   

  }
  
  login() {
    this.authService.initImplicitFlow();
  }
  logout() {
    this.authService.logOut();
  }

  token() {
    let claims: any = this.authService.getIdentityClaims();
    return claims ? claims : null;
  }

}
