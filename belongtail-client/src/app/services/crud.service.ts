import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { PersonalDetails } from '../models/personal-details';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  insert(personalDetails: PersonalDetails): Promise<PersonalDetails> {
    const url = `${environment.apiUrl}insert`;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http
      .post<PersonalDetails>(url, personalDetails, httpOptions)
      // .pipe(
      //   tap(o => {
      //     this.getAll();
      //   })
      // )
      .toPromise();
  }
}
