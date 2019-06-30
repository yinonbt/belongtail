import { Component, OnInit } from "@angular/core";
import { Person } from "src/app/models/person";
import { CrudService } from 'src/app/services/crud.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-persons-root",
  templateUrl: "./persons-root.component.html",
  styleUrls: ["./persons-root.component.scss"]
})
export class PersonsRootComponent implements OnInit {
  personSelected: Person;
  persons$: Observable<Person[]>;

  constructor(private crudService: CrudService) {
    this.persons$ = crudService.persons$;
  }

  ngOnInit() {
    this.crudService.getAll();
  }

  setNewPerson() {
    this.personSelected = {
      id: null,
      firstName: null,
      lastName: null,
      gender: null,
      picUrl: null,
      date: null
    };
  }

  onSavePersonRequested(person: Person) {
    this.crudService.insert(person);
  }

  onPersonSelectRequest(person: Person) {
    this.personSelected = person;
  }
}
