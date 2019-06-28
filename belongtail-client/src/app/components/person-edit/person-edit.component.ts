import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Person } from 'src/app/models/person';

@Component({
  selector: "app-person-edit",
  templateUrl: "./person-edit.component.html",
  styleUrls: ["./person-edit.component.scss"]
})
export class PersonEditComponent implements OnInit, OnChanges {
  @Input() person: Person;

  personFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges() {
    this.personFormGroup = this.formBuilder.group({
      formControlFirstName: [this.person.firstName, Validators.required],
      formControlLastName: [this.person.lastName, Validators.required],
      formControlGender: [this.person.gender, Validators.required],
      formControlPicUrl: [this.person.picUrl, Validators.required]
    });
  }
}
