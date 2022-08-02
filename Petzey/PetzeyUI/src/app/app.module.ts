import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContentComponent } from './Components/content/content.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { LoginComponent } from './Components/login/login.component';
import { DoctorComponent } from './Components/dashboards/doctor/doctor.component';
import { PatientComponent } from './Components/dashboards/patient/patient.component';
import { ReceptionistComponent } from './Components/dashboards/receptionist/receptionist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AppointmentComponent,
    LoginComponent,
    DoctorComponent,
    PatientComponent,
    ReceptionistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
