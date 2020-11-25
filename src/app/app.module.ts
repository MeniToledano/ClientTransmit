import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {_MatMenuDirectivesModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationComponent} from './registration/registration.component';
import {MyRoutesComponent} from './my-routes/my-routes.component';
import {RequestComponent} from './my-requests/request/request.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NewRequestDialogComponent} from './my-requests/new-request-dialog/new-request-dialog.component';
import {RouteComponent} from './my-routes/route/route.component';
import {NewRouteDialogComponent} from './my-routes/new-route-dialog/new-route-dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {AdComponent} from './dashboard/ad/ad.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {ShowVolunteerCredentialsComponent} from './my-requests/show-volunteer-credentials/show-volunteer-credentials.component';
import {AppRoutingModule, routingComponent} from './app-routing.module';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { DialogRequestComponent } from './my-requests/request/dialog-request/dialog-request.component';
import { DialogRouteComponent } from './my-routes/route/dialog-route/dialog-route.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegistrationComponent,
    //   MyRequestsComponent,
    MyRoutesComponent,
    RequestComponent,
    NewRequestDialogComponent,
    RouteComponent,
    NewRouteDialogComponent,
    // DashboardComponent,
    AdComponent,
    ShowVolunteerCredentialsComponent,
    routingComponent,
    AlertDialogComponent,
    DialogRequestComponent,
    DialogRouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    _MatMenuDirectivesModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
