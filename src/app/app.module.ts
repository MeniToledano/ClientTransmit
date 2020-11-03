import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {_MatMenuDirectivesModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { MyRoutesComponent } from './my-routes/my-routes.component';
import {RequestComponent} from './my-requests/request/request.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NewRequestDialogComponent } from './my-requests/new-request-dialog/new-request-dialog.component';
import {RouteComponent} from './my-routes/route/route.component';
import { NewRouteDialogComponent } from './my-routes/new-route-dialog/new-route-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegistrationComponent,
    MyRequestsComponent,
    MyRoutesComponent,
    RequestComponent,
    NewRequestDialogComponent,
    RouteComponent,
    NewRouteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    _MatMenuDirectivesModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    NgxMaterialTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
