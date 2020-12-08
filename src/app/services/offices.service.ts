import { Injectable } from "@angular/core";
import { Office } from '../interfaces/Office';

@Injectable()
export class OfficesService {
  private offices: Office[] = [
    {
      name: "Talleres y Laboratorios",
      details:
        "En la oficina de talleres y laboratorios, nos dedicamos a la gestión de mobiliario y asignación de áreas dentro del plantel para cualquier evento en específico.",
      schedules: "Lunes a Viernes de 9:30 a 4:30",
      img: "1941-11-01",
      email: "tallereslaboratorios@conalepqroo.edu.mx",
      assigned_admin: "Lic. Jorge Noe Ricalde Pak"
    },
  ];
  constructor() {
    console.log("Servicio Listo para Usarse");
  }

  getOffices(): Office[] {
    return this.offices;
  }

  getOffice(idx: number) {
    return this.offices[idx];
  }

  searchOffices(term: string) {
    let officesArr: Office[] = [];
    term = term.toLowerCase();

    for (let i = 0; i < this.offices.length; i++) {
      let office = this.offices[i];

      let nombre = office.name.toLowerCase();
      if (nombre.indexOf(term) >= 0) {
        office.idx = i;
        officesArr.push(office);
      }
    }
    return officesArr;
  }
}