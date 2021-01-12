import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {
  API_URI = 'https://conalep2-offices-rest.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getOffices() {
    return this.http.get(`${this.API_URI}/offices`);
  }

  getOffice(idx: number) { //TODO: Add YII2 GETTER ?expand=officeServices
    return this.http.get(`${this.API_URI}/offices/${idx}`);
  }

  searchOffices(term: string) {
    return this.http.get(`${this.API_URI}/offices?q=${term}`);
  }
}