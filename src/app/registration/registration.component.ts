import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from 'src/models/person';
import { NgForm } from '@angular/forms';
import { ReportsComponent } from '../reports/reports.component';
import { PersonRegistrationService } from 'src/services/person-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  person: Person = new Person();
  message = '';

  constructor(
    private service: PersonRegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registerPerson() {
    this.service.registerPerson(this.person).subscribe(
      (data) => {
        console.log('Response received');
        this.message = 'Registration Successful';
        this.router.navigate(['']);
      },
      (error) => {
        console.log('Exception Occured');
        this.message = error.console.console.error;
      }
    );
  }
}
