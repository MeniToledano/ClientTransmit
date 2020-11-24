import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyRequestsComponent} from './my-requests/my-requests.component';
import {MyRoutesComponent} from './my-routes/my-routes.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'my-requests', component: MyRequestsComponent},
  {path: 'my-routes', component: MyRoutesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponent = [DashboardComponent, MyRequestsComponent, MyRoutesComponent, LoginComponent, RegistrationComponent];
