import { Component, OnInit } from "@angular/core";
import { Person } from "src/app/models/person";
import { CrudService } from "src/app/services/crud.service";
import { Observable } from "rxjs";
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: "app-persons-root",
  templateUrl: "./persons-root.component.html",
  styleUrls: ["./persons-root.component.scss"]
})
export class PersonsRootComponent implements OnInit {
  personSelected: Person = null;
  persons$: Observable<Person[]>;

  constructor(private crudService: CrudService, private uploadService: UploadService) {
    this.persons$ = crudService.persons$;
  }

  ngOnInit() {
    this.crudService.getAll();
  }

  setNewPerson() {
    // assign null to uploaded pic Observable in order new instance of edit component will not retrieve last uploaded pic URL
    this.uploadService.reset();
    
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
    if (person.id && person.id > 0) {
      this.crudService.update(person).subscribe(p => {
        this.personSelected = p;
      });
    } else {
      this.crudService.insert(person).subscribe(p => {
        this.personSelected = p;
      });
    }
  }

  onPersonSelectRequest(person: Person) {
    this.personSelected = person;
  }

  onPersonDeleteRequest(person: Person) {
    this.personSelected = null;
    this.crudService.delete(person);
  }
}
