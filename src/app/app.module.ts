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
import { ViewAgentDetailComponent } from './view-agent-detail/view-agent-detail.component';
import { UpdateAgentDetailComponent } from './update-agent-detail/update-agent-detail.component';
import { AllAgentListComponent } from './all-agent-list/all-agent-list.component';
import { SingleAgentDetailComponent } from './single-agent-detail/single-agent-detail.component';
import { SingleAgentComponent } from './single-agent/single-agent.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { PreMedDetailComponent } from './pre-med-detail/pre-med-detail.component';
import { PassportDetailComponent } from './passport-detail/passport-detail.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';

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
    ApplicantListComponent,
    ViewAgentDetailComponent,
    UpdateAgentDetailComponent,
    AllAgentListComponent,
    SingleAgentDetailComponent,
    SingleAgentComponent,
    UpdatePaymentComponent,
    PaymentDetailComponent,
    ApplicantComponent,
    PersonalDetailComponent,
    PreMedDetailComponent,
    PassportDetailComponent,
    ExpenseDetailComponent,
    ApplicantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
