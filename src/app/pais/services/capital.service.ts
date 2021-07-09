import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiUrl: string = "https://restcountries.eu/rest/v2";


  constructor(private http: HttpClient) { }

  buscarCapital(termino: string): Observable<any> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<any[]>(url);
  }
}
