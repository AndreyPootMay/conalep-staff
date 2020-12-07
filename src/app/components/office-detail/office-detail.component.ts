import { Component, OnInit, Input } from '@angular/core';
import { Office } from '../../interfaces/office';

@Component({
  selector: 'app-office-detail',
  templateUrl: './office-detail.component.html',
  styleUrls: ['./office-detail.component.css']
})
export class OfficeDetailComponent implements OnInit {

  @Input() office: Office;
  constructor() {
  }

  ngOnInit(): void {
  }

}
