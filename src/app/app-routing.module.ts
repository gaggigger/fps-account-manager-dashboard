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
import { AllAgentListComponent } from './all-agent-list/all-agent-list.component';
import { ViewAgentDetailComponent } from './view-agent-detail/view-agent-detail.component';
import { UpdateAgentDetailComponent } from './update-agent-detail/update-agent-detail.component';
import { SingleAgentDetailComponent } from './single-agent-detail/single-agent-detail.component';
import { SingleAgentComponent } from './single-agent/single-agent.component';


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
			path:'allAgents',
			component:AllAgentsComponent,
			children:[
				{
					path:'',
					component:AllAgentListComponent
				},
				{
					path:'view',
					component:ViewAgentDetailComponent
				},
				{
					path:'update',
					component:SingleAgentDetailComponent,
					children:[
						{
							path:'',
							component:SingleAgentComponent
						},
						{
							path:'view',
							component:ViewAgentDetailComponent
						},
						{
							path:'update',
							component:UpdateAgentDetailComponent
						}
					]
				}
			]
		},
		{
			path:'payAgents',
			component:PayAgentsComponent
		},
		{
			path:'applicantLists',
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
