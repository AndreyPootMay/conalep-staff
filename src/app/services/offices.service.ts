import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {
  API_URI = 'http://localhost:80/sald/api/v1';

  constructor(private http: HttpClient) { }

  getOffices() {
    return this.http.get(`${this.API_URI}/offices`);
  }

  getOffice(idx: number) {
    return this.http.get(`${this.API_URI}/offices/${idx}?expand=officeServices`);
  }

  searchOffices(term: string) {
    return this.http.get(`${this.API_URI}/offices?q=${term}`);
  }
}