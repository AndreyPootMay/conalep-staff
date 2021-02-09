import { Injectable } from '@angular/core';
import officesArray from './offices.array';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {
  private offices: Office[] = officesArray;

  constructor() {
    console.log("Listo para servir!");
  }

  getOffices(): Office[] {
    return this.offices;
  }

  getOffice(id: number) {
    return this.offices[id-1];
  }

  searchOffices(term: string): Office[] {
    let officesArr: Office[] = [];
    term = term.toLowerCase();

    for (let i = 0; i < this.offices.length; i++) {

      let office = this.offices[i];

      let name = office.name.toLowerCase();

      if (name.indexOf(term) >= 0) {
        office.id = i;
        officesArr.push(office)
      }
    }

    return officesArr;
  }
}

export interface Office {
  id?: number;
  name: string;
  details: string;
  img: string;
  active: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  schedules: string;
  email: string;
  assigned_admin: string;
  officeServices: any;
}