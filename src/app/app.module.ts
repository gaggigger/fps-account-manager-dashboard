import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AllAgentsComponent } from './all-agents/all-agents.component';
import { PayAgentsComponent } from './pay-agents/pay-agents.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    CreateAccountComponent,
    HomeComponent,
    ProfileDetailComponent,
    AllAgentsComponent,
    PayAgentsComponent,
    ApplicantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
