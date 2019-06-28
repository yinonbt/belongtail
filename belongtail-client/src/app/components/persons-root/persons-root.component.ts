import { Component, OnInit } from "@angular/core";
import { Person } from "src/app/models/person";
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: "app-persons-root",
  templateUrl: "./persons-root.component.html",
  styleUrls: ["./persons-root.component.scss"]
})
export class PersonsRootComponent implements OnInit {
  personSelected: Person;
  constructor(private crudService: CrudService) {}

  ngOnInit() {}

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
    console.log('person sended to service: ', person);
    this.crudService.insert(person);
  }
}
