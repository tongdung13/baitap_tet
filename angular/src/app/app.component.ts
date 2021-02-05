import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenAuthService } from './shared/token-auth.service';
import { AuthenticationStateService } from './shared/authentication-state.service';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD9hymIaCe81MO_bq_92H4tOZgAIMMW2jQ',
  databaseURL: 'https://angularchat-40ce0-default-rtdb.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Room Chat';
  isLoggedin: boolean;

  constructor(
    public router: Router,
    private tokenAuthService: TokenAuthService,
    public authenticationStateService: AuthenticationStateService
  ) {
    // @ts-ignore
    firebase.initializeApp(config);
  }

  ngOnInit() {
    this.authenticationStateService.userAuthState.subscribe(res => {
        this.isLoggedin = res;
    });
  }

  logOut() {
    this.authenticationStateService.setAuthState(false);
    this.tokenAuthService.destroyToken();
    this.router.navigate(['signin']);
  }

}
