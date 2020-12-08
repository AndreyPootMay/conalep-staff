import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfficesService } from "../../services/offices.service";

@Component({
  selector: "app-office",
  templateUrl: "./office.component.html"
})
export class OfficeComponent {
  office: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _officesService: OfficesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.office = this._officesService.getOffice(params["id"]);
      console.log(this.office);
    });
  }
}
