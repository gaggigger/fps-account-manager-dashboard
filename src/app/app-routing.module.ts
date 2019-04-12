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
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { PreMedDetailComponent } from './pre-med-detail/pre-med-detail.component';
import { PassportDetailComponent } from './passport-detail/passport-detail.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';


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
			component:PayAgentsComponent,
			children:[
				{
					path:'',
					component:UpdatePaymentComponent

				},
			{
				path:'update',
				component:UpdatePaymentComponent
			},
		{
			path:'detail',
			component:PaymentDetailComponent
		}]
		},
		{
			path:'applicant',
			component:ApplicantComponent,
			children:[
				{
					path:'',
					component:ApplicantListComponent
				},
				{
					path:'list',
					component:ApplicantListComponent
				},
				{
					path:'detail',
					component:ApplicantDetailComponent,
					children:[
						{
							path:'',
							component:PersonalDetailComponent
						},
						{
							path:'personal',
							component:PersonalDetailComponent
						},
						{
							path:'medical',
							component:PreMedDetailComponent
						},
						{
							path:'passport',
							component:PassportDetailComponent
						},
						{
							path:'expense',
							component:ExpenseDetailComponent
						}
					]
				}
			]
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
