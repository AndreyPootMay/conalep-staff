import { Component, OnInit } from "@angular/core";
import { OfficesService, Office } from "../../services/offices.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-offices",
  templateUrl: "./offices.component.html"
})
export class OfficesComponent implements OnInit {
  offices: Office[] = [];

  constructor(private _officesService: OfficesService, private router: Router) {}

  ngOnInit() {
    this.offices = this._officesService.getOffices();
    // console.log(this.offices);
  }

  viewOffice(idx: number) {
    this.router.navigate(["/office", idx]);
  }
}
