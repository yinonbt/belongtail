import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {
  @Input() persons: Person[];
  
  constructor() { }

  ngOnInit() {
  }

}
