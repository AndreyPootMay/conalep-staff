import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfficesService } from "../../services/offices.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
  offices: any;
  term: string = '';

  constructor(
    private activateRouter: ActivatedRoute,
    private _officesService: OfficesService
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.term = params["term"];
      this.offices = this._officesService.searchOffices(params["term"]);
      console.log(this.offices);
    });
  }
}
