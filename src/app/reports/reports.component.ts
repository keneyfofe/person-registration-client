import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonRegistrationService } from 'src/services/person-registration.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  persons: any;
  constructor(private service: PersonRegistrationService) {}

  ngOnInit() {
    let resp = this.service.getPersons();
    resp.subscribe((data) => (this.persons = data));
  }
}
