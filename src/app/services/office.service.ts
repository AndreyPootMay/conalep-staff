import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Services
import { MessageService } from './message.service';
// Interfaces
import { Office } from '../interfaces/office';
// Mocks
import { OFFICES } from '../mocks/mock-offices';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Office[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('OfficeService: fetched offices');
    return of(OFFICES);
  }
}