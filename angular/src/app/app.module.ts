import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { ProfileListComponent } from './profiles/profile-list/profile-list.component';
import { ProfileDatailsComponent } from './profiles/profile-datails/profile-datails.component';
import { CreateProfileComponent } from './profiles/create-profile/create-profile.component';
import { UpdateProfileComponent } from './profiles/update-profile/update-profile.component';
import { MessageComponent } from './messages/message/message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ProfileListComponent,
    ProfileDatailsComponent,
    CreateProfileComponent,
    UpdateProfileComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
