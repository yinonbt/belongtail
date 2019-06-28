import { Component, OnInit } from "@angular/core";
import { Person } from "src/app/models/person";

@Component({
  selector: "app-persons-root",
  templateUrl: "./persons-root.component.html",
  styleUrls: ["./persons-root.component.scss"]
})
export class PersonsRootComponent implements OnInit {
  personSelected: Person;
  constructor() {}

  ngOnInit() {}

  setNewPerson() {
    this.personSelected = {
      id: -1,
      firstName: "",
      lastName: "",
      gender: 1,
      picUrl: "",
      date: null
    };
  }
}
