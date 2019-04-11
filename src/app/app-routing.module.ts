import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AllAgentsComponent } from './all-agents/all-agents.component';
import { PayAgentsComponent } from './pay-agents/pay-agents.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';


const routes: Routes = [
{
path:'login',
component:LoginComponent	
},
{
	path:'forgetPassword',
	component:ForgetPasswordComponent
},
{
	path:'createAccount',
	component:CreateAccountComponent
},
{
	path:'home',
	component:HomeComponent,
	children:[
		{
			path:'',
			component:ProfileDetailComponent
		},
		{
			path:'home/allAgents',
			component:AllAgentsComponent
		},
		{
			path:'home/payAgents',
			component:PayAgentsComponent
		},
		{
			path:'home/applicantLists',
			component:ApplicantListComponent
		}
	]
},
{
	path:'',
	component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
