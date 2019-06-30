import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {
  @Input() persons: Person[];
  @Input() personSelected: Person;
  @Output() personSelectRequest = new EventEmitter<Person>();
  
  constructor() { }

  ngOnInit() {
  }

  onPersonSelectRequest(person: Person) {
    this.personSelectRequest.emit(person);
  }
}
