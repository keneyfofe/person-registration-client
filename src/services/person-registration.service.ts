import { Injectable } from '@angular/core';
import { Person } from 'src/models/person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonRegistrationService {
  [x: string]: any;
  constructor(private http: HttpClient) {}
  public getPersons() {
    return this.http.get('http://localhost:8080/findAllPerson');
  }
  public registerPerson(person: Person) {
    return this.http.post<any>('http://localhost:8080/registerPerson', person);
  }
}
