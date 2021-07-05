import { RegistrationComponent } from './registration/registration.component';
import { ReportsComponent } from './reports/reports.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonRegistrationService } from 'src/services/person-registration.service';

@NgModule({
  declarations: [AppComponent, RegistrationComponent, ReportsComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [PersonRegistrationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
