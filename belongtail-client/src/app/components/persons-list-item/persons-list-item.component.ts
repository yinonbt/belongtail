import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Person } from "src/app/models/person";

@Component({
  selector: "app-persons-list-item",
  templateUrl: "./persons-list-item.component.html",
  styleUrls: ["./persons-list-item.component.scss"]
})
export class PersonsListItemComponent implements OnInit {
  @Input() person: Person;
  @Input() personSelected: Person;
  @Output() personSelectRequest = new EventEmitter<Person>();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.personSelectRequest.emit(this.person);
  }
}
