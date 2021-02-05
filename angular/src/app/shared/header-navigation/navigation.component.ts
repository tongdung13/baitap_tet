import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationStateService } from '../authentication-state.service';
import { TokenAuthService } from '../token-auth.service';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Output()
  toggleSidebar = new EventEmitter<void>();

  public showSearch = false;

  isLoggedin: boolean;

  constructor(
    public router: Router,
    private tokenAuthService: TokenAuthService,
    public authenticationStateService: AuthenticationStateService
  ) {
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
