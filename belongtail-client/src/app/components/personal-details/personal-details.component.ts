import { Component, OnInit } from "@angular/core";
import { CrudService } from "src/app/services/crud.service";
import { PersonalDetails } from "src/app/models/personal-details";

@Component({
  selector: "app-personal-details",
  templateUrl: "./personal-details.component.html",
  styleUrls: ["./personal-details.component.scss"]
})
export class PersonalDetailsComponent implements OnInit {
  constructor(private crudService: CrudService) {}

  ngOnInit() {}

  insert() {
    const personalDetails: PersonalDetails = {
      id: -1,
      firstName: "test1",
      lastName: "test2",
      gender: 1,
      picUrl: "test3",
      date: new Date()
    };
    this.crudService.insert(personalDetails);
  }
}
