import { Component, OnInit } from '@angular/core';

// Interfaces
import { Office } from '../../interfaces/office';

// Services
import { OfficeService } from '../../services/office.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

  selectedOffice: Office;

  offices: Office[];

  constructor(private officeService: OfficeService, private messageService: MessageService) { }

  ngOnInit() {
    this.getOffices();
  }

  onSelect(office: Office): void {
    this.selectedOffice = office;
    this.messageService.add(`OfficesComponent: Selected office id=${office.id}`);
  }

  getOffices(): void {
    this.officeService.getHeroes()
        .subscribe(offices => this.offices = offices);
  }
}