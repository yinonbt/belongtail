import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private personsSubject = new BehaviorSubject<Person[]>([]);

  get persons$(): Observable<Person[]> {
    return this.personsSubject;
  }

  constructor(private http: HttpClient) { }

  getAll(): void {
    const url = `${environment.apiUrl}api/v1/posts`;
    this.http.get<Person[]>(url).subscribe(result => {
      console.log('all persons: ', result);
      this.personsSubject.next(result);
    });
  }

  insert(personalDetails: Person): Promise<Person> {
    const url = `${environment.apiUrl}api/v1/posts`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http
      .post<Person>(url, personalDetails, httpOptions)
      .pipe(
        tap(o => {
          this.getAll();
        })
      )
      .toPromise();
  }
}
