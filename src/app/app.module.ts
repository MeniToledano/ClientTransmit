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
import {ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { MyRoutesComponent } from './my-routes/my-routes.component';
import { RequestComponent } from './my-requests/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegistrationComponent,
    MyRequestsComponent,
    MyRoutesComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    _MatMenuDirectivesModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
