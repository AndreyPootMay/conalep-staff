import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-office-card",
  templateUrl: "./office-card.component.html",
  styleUrls: ["./office-card.component.css"]
})
export class OfficeCardComponent implements OnInit {
  @Input() office: any = {};
  @Input() index: number = 0;

  @Output() officeSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.officeSelected = new EventEmitter();
  }

  ngOnInit() {}

  viewOffice() {
    //   console.log(this.index);
      this.router.navigate(["/office", this.index]);
    // this.officeSelected.emit(this.index);
  }
}
