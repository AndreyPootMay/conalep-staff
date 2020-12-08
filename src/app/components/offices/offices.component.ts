import { Component, OnInit } from "@angular/core";
import { OfficesService } from "../../services/offices.service";

import { Router } from "@angular/router";
import { Office } from './../../interfaces/Office';

@Component({
  selector: "app-offices",
  templateUrl: "./offices.component.html"
})
export class OfficesComponent implements OnInit {
  offices: Office[] = [];

  constructor(private _officesService: OfficesService, private router: Router) {}

  ngOnInit() {
    this.offices = this._officesService.getOffices();
  }

  viewOffice(idx: number) {
    this.router.navigate(["/office", idx]);
  }
}
