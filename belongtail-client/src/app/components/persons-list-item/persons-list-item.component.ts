import { Component, OnInit, Input } from "@angular/core";
import { Person } from "src/app/models/person";

@Component({
  selector: "app-persons-list-item",
  templateUrl: "./persons-list-item.component.html",
  styleUrls: ["./persons-list-item.component.scss"]
})
export class PersonsListItemComponent implements OnInit {
  @Input() person: Person;
  
  constructor() {}

  ngOnInit() {}
}
