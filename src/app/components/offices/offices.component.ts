import { Component, OnInit } from "@angular/core";
import { OfficesService } from "../../services/offices.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-offices",
  templateUrl: "./offices.component.html"
})
export class OfficesComponent implements OnInit {
  offices: any;

  constructor(private _officesService: OfficesService, private router: Router) { }

  ngOnInit() {
    this.getOffices();
  }

  getOffices() {
    this._officesService.getOffices()
      .subscribe(
        res => {
          this.offices = res;
          console.log(res)
        },
        err => console.error(err)
      );
  }

  viewOffice(idx: number) {
    this.router.navigate(["/office", idx]);
  }
}
